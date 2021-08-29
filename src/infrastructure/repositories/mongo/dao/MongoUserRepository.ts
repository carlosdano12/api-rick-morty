import { IUserDataOut, IUserPagination } from '@application/data';
import { DEPENDENCY_CONTAINER, TYPES } from '@configuration';
import { UserEntity } from '@domain/entities';
import { IUser, IUserInfo } from '@domain/models';
import { UserRepository } from '@domain/repository';
import { injectable } from 'inversify';
import { Db, ObjectId } from 'mongodb';

@injectable()
export class MongoUserRepository implements UserRepository {
    private mongo = DEPENDENCY_CONTAINER.get<Db>(TYPES.MongoDB);
    private collection = 'users';

    async save(data: IUser): Promise<void> {
        await this.mongo.collection(this.collection).insertOne(data);
    }

    async update(id: ObjectId, data: UserEntity): Promise<void> {
        const query = { _id: id };
        await this.mongo.collection(this.collection).updateOne(query, { $set: data });
    }

    async addFriend(id: ObjectId | string, friendId: string): Promise<void> {
        const query = { _id: new ObjectId(id) };
        await this.mongo.collection(this.collection).updateOne(query, { $addToSet: { friends: friendId } });
    }

    async getAllPagination({ page = 1, limit = 5, search }: IUserPagination): Promise<IUserDataOut> {
        const filter = search
            ? { $or: [{ username: { $regex: `.*${search}.*` } }, { email: { $regex: `.*${search}.*` } }] }
            : {};
        const result = this.mongo.collection<IUserInfo>(this.collection).find(filter);
        const count = await result.count();
        const users = await result
            .project({ password: 0, character: 0, friends: 0 })
            .skip(page > 0 ? (page - 1) * limit : 0)
            .limit(limit)
            .toArray();

        return { info: { count, pages: Math.ceil(count / limit) }, results: users as IUserInfo[] };
    }

    async getOneByUsername(username: string): Promise<UserEntity | null> {
        return this.mongo.collection<UserEntity>(this.collection).findOne({ username });
    }

    async getOneByEmail(email: string): Promise<UserEntity | null> {
        return this.mongo.collection<UserEntity>(this.collection).findOne({ email });
    }

    async getOne(id: ObjectId | string): Promise<UserEntity | null> {
        return this.mongo.collection<UserEntity>(this.collection).findOne({ _id: new ObjectId(id) });
    }
}

import { IUserDataOut, IUserPagination } from '@application/data';
import { UserEntity } from '@domain/entities';
import { IUser } from '@domain/models';
import { ObjectId } from 'mongodb';

export interface UserRepository {
    save(user: IUser): Promise<void>;
    update(id: ObjectId | undefined, data: UserEntity): Promise<void>;
    addFriend(id: ObjectId, friendId: string): Promise<void>;
    searchFriend(id: ObjectId | string, friendId: string): Promise<UserEntity | null>;
    removeFriend(id: ObjectId | string, friendId: string): Promise<void>;
    getAllPagination(pagination: IUserPagination): Promise<IUserDataOut>;
    getOneByUsername(username: string): Promise<UserEntity | null>;
    getOneByEmail(email: string): Promise<UserEntity | null>;
    getOne(id: ObjectId | string): Promise<UserEntity | null>;
}

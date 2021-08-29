import { ICharacter, IUser } from '@domain/models';
import { ObjectId } from 'mongodb';

export class UserEntity {
    _id?: ObjectId;
    username: string;
    name: string;
    lastName?: string;
    email: string;
    password: string;
    character?: ICharacter;
    friends?: string[];

    constructor(data: IUser) {
        this.username = data.username;
        this.name = data.name;
        this.lastName = data.lastName;
        this.email = data.email;
        this.password = data.password;
        this.character = data.character;
        this.friends = data.friends;
    }

    static create(data: IUser): UserEntity {
        return new UserEntity(data);
    }
}

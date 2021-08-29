import { ObjectId } from 'mongodb';
import { ICharacter } from './ICharacter';

export interface IUserInfo {
    _id?: ObjectId;
    username: string;
    name: string;
    lastName?: string;
    email: string;
}

export interface IUser extends IUserInfo {
    password: string;
    character?: ICharacter;
    friends?: string[];
}

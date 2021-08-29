import { IUserFriend, IUserCharacterDataIn, IUserDataIn, IUserDataUpdate, IUserPagination } from '@application/data';
import Joi from 'joi';

export const UserDataInSchema = Joi.object<IUserDataIn>({
    id: Joi.string().required(),
});

export const UserCharacteSchema = Joi.object<IUserCharacterDataIn>({
    characterId: Joi.number().required(),
});

export const UserPaginationSchema = Joi.object<IUserPagination>({
    page: Joi.number().optional(),
    limit: Joi.number().optional(),
    search: Joi.string().empty().allow('').optional(),
});

export const UserUpdateSchema = Joi.object<IUserDataUpdate>({
    username: Joi.string().allow('').optional(),
    name: Joi.string().allow('').optional(),
    lastName: Joi.string().allow('').optional(),
});

export const UserFriendSchema = Joi.object<IUserFriend>({
    friendId: Joi.string().required(),
});

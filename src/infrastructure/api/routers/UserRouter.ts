import {
    IRegisterDataIn,
    IUserAddFriend,
    IUserCharacterDataIn,
    IUserDataUpdate,
    IUserPagination,
} from '@application/data';
import { UserAppService } from '@application/services';
import { DEPENDENCY_CONTAINER } from '@configuration';
import { IUser } from '@domain/models';
import { FastifyRequest, FastifyReply } from 'fastify';
import {
    RegisterSchema,
    UserAddFriendSchema,
    UserCharacteSchema,
    UserPaginationSchema,
    UserUpdateSchema,
} from '../schemas';
import { validateData } from '../util';

export const search = async (req: FastifyRequest, reply: FastifyReply): Promise<FastifyReply | void> => {
    const userService = DEPENDENCY_CONTAINER.get(UserAppService);
    const data = validateData<IUserPagination>(UserPaginationSchema, req.query);
    const response = await userService.getAllPagination(data);
    const { _id } = req.user as IUser;
    console.log('user', _id);
    return reply.send({ ...response });
};

export const register = async (req: FastifyRequest, reply: FastifyReply): Promise<FastifyReply | void> => {
    const userService = DEPENDENCY_CONTAINER.get(UserAppService);
    const data = validateData<IRegisterDataIn>(RegisterSchema, req.body);
    const response = await userService.create(data);
    return reply.code(201).send({ ...response });
};

export const selectCharacter = async (req: FastifyRequest, reply: FastifyReply): Promise<FastifyReply | void> => {
    const userService = DEPENDENCY_CONTAINER.get(UserAppService);
    const data = validateData<IUserCharacterDataIn>(UserCharacteSchema, req.params);
    const response = await userService.selectCharacter(data);
    return reply.send({ ...response });
};

export const update = async (req: FastifyRequest, reply: FastifyReply): Promise<FastifyReply | void> => {
    const userService = DEPENDENCY_CONTAINER.get(UserAppService);
    const data = validateData<IUserDataUpdate>(UserUpdateSchema, req.body);
    const { _id } = req.user as IUser;
    if (_id) await userService.update(_id, data);
    return reply.code(204).send();
};

export const addFriend = async (req: FastifyRequest, reply: FastifyReply): Promise<FastifyReply | void> => {
    const userService = DEPENDENCY_CONTAINER.get(UserAppService);
    const { friendId } = validateData<IUserAddFriend>(UserAddFriendSchema, req.params);
    const { _id } = req.user as IUser;
    if (_id) await userService.addFriend(_id, friendId);
    return reply.code(204).send();
};

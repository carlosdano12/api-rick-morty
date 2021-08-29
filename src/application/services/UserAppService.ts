import { injectable } from 'inversify';
import { TYPES, DEPENDENCY_CONTAINER } from '@configuration';
import { UserRepository } from '@domain/repository';
import { UserEntity } from '@domain/entities';
import { Result, Response } from '@domain/response';
import { IRegisterDataIn, IUserDataOut, IUserDataUpdate, IUserPagination } from '@application/data';
import * as bcrypt from 'bcrypt';
import { BadRequestException, NotFoundException } from '@domain/exceptions';
import { CharacterAppService } from './CharacterAppService';
import { API_URL } from '@util';
import { ObjectId } from 'mongodb';

@injectable()
export class UserAppService {
    private userRepository = DEPENDENCY_CONTAINER.get<UserRepository>(TYPES.MongoUserRepository);
    private characterService = DEPENDENCY_CONTAINER.get(CharacterAppService);

    async create(dataRegister: IRegisterDataIn): Promise<Response<string | null> | undefined> {
        const usernameExist = await this.userRepository.getOneByUsername(dataRegister.username);
        if (usernameExist) throw new BadRequestException('El nombre de usuario no esta disponible');
        const emailExist = await this.userRepository.getOneByEmail(dataRegister.email);
        if (emailExist) throw new BadRequestException('Este email ya está asociado a un usuario');
        const user = UserEntity.create({
            ...dataRegister,
            password: await bcrypt.hash(dataRegister.password, 10),
            friends: [],
        });
        await this.userRepository.save(user);
        return Result.ok();
    }

    async update(id: ObjectId, dataToUpdate: IUserDataUpdate): Promise<Response<string | null> | undefined> {
        const user = await this.userRepository.getOne(id);
        if (!user) throw new NotFoundException('No se encontró el usuario');
        if (dataToUpdate.username) {
            const usernameExist = await this.userRepository.getOneByUsername(dataToUpdate.username);
            if (usernameExist && usernameExist._id !== user._id)
                throw new BadRequestException('El nombre de usuario no esta disponible');
            user.username = dataToUpdate.username;
        }
        user.name = dataToUpdate?.name ? dataToUpdate?.name : user.name;
        user.lastName = dataToUpdate?.lastName ? dataToUpdate?.lastName : user.lastName;
        await this.userRepository.update(user._id, user);
        return Result.ok();
    }

    async addFriend(id: ObjectId, friendId: string): Promise<void> {
        const user = await this.userRepository.searchFriend(id, friendId);
        if (user) throw new BadRequestException('Este amigo ya fue agregado');
        await this.userRepository.addFriend(id, friendId);
    }

    async removeFriend(id: ObjectId, friendId: string): Promise<void> {
        await this.userRepository.removeFriend(id, friendId);
    }

    async selectCharacter(id: ObjectId, characterId: number): Promise<Response<string | null> | undefined> {
        const user = await this.userRepository.getOne(id);
        if (!user) throw new NotFoundException('No se encontró el usuario');

        const character = await this.characterService.getOneCharacter(characterId);
        if (!character) throw new NotFoundException('No se encontró el personaje');

        user.character = character;
        await this.userRepository.update(user._id, user);
        return Result.ok();
    }

    async getAllPagination({ page = 1, limit = 5, search }: IUserPagination): Promise<IUserDataOut> {
        const { info, results } = await this.userRepository.getAllPagination({ page, limit, search });
        return {
            info: {
                ...info,
                next:
                    page !== info.pages
                        ? `${API_URL}/users?page=${page + 1}&limit=${limit}&search=${search ? search : ''}`
                        : null,
                prev:
                    page > 1 ? `${API_URL}/users?page=${page - 1}&limit=${limit}&search=${search ? search : ''}` : null,
            },
            results: results,
        };
    }

    async getOneByUsername(username: string): Promise<UserEntity | null> {
        return this.userRepository.getOneByUsername(username);
    }

    async getOneByEmail(email: string): Promise<UserEntity | null> {
        return this.userRepository.getOneByEmail(email);
    }
}

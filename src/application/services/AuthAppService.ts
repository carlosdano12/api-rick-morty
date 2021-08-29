import { injectable } from 'inversify';
import { DEPENDENCY_CONTAINER } from '@configuration';
import { UserAppService } from './UserAppService';
import { BadRequestException } from '@domain/exceptions';
import { UserEntity } from '@domain/entities';
import * as bcrypt from 'bcrypt';

@injectable()
export class AuthAppService {
    private userService = DEPENDENCY_CONTAINER.get(UserAppService);

    async login(email: string, password: string): Promise<UserEntity | undefined> {
        const user = await this.userService.getOneByEmail(email);
        if (!user) throw new BadRequestException('Email invalido');
        if (await bcrypt.compare(password, user.password)) return user;
        throw new BadRequestException('Contraseña invalida');
    }
}

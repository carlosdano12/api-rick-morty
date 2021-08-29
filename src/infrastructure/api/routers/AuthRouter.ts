import { FastifyRequest, FastifyReply } from 'fastify';
import { DEPENDENCY_CONTAINER } from '@configuration';
import { AuthAppService } from '@application/services';
import { ILogin } from '@application/data';
import { validateData } from '../util';
import { LoginSchema } from '../schemas';
import { application } from '../Application';

export const login = async (req: FastifyRequest, reply: FastifyReply): Promise<FastifyReply | void> => {
    const authService = DEPENDENCY_CONTAINER.get(AuthAppService);
    const { email, password } = validateData<ILogin>(LoginSchema, req.body);
    const user = await authService.login(email, password);
    if (user) {
        const token = application.jwt.sign({
            _id: user._id,
            username: user.username,
            name: user.name,
            email: user.email,
        });
        return reply.send({ token });
    }
};

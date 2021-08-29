import { ILogin } from '@application/data';
import Joi from 'joi';

export const LoginSchema = Joi.object<ILogin>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

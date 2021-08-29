import { IRegisterDataIn } from '@application/data';
import Joi from 'joi';

export const RegisterSchema = Joi.object<IRegisterDataIn>({
    username: Joi.string().required(),
    name: Joi.string().required(),
    lastName: Joi.string().optional(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

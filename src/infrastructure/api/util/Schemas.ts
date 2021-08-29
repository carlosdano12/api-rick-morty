import Joi from 'joi';

type Schema = Joi.ObjectSchema | Joi.ArraySchema;
type Body = Record<string, unknown> | undefined | unknown;

export const validateData = <T>(schema: Schema, dataToValidate: Body): T => {
    if (dataToValidate) {
        const { error, value } = schema.validate(dataToValidate, { convert: true });
        if (error) {
            console.error(`schemaError: ${JSON.stringify(error)}`);
            throw new Error(error.message);
        }
        return value;
    }
    throw new Error('mensaje indefinido');
};

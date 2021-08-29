import { ICharacterPagination, ICharacterSearch } from '@application/data/in/ICharacterDataIn';
import Joi from 'joi';

export const CharacterPageSchema = Joi.object<ICharacterPagination>({
    page: Joi.number().optional(),
});

export const CharacterSearchSchema = Joi.object<ICharacterSearch>({
    id: Joi.number().required(),
});

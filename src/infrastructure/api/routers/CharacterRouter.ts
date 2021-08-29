import { ICharacterPagination, ICharacterSearch } from '@application/data';
import { CharacterAppService } from '@application/services';
import { DEPENDENCY_CONTAINER } from '@configuration';
import { FastifyRequest, FastifyReply } from 'fastify';
import { CharacterPageSchema, CharacterSearchSchema } from '../schemas';
import { validateData } from '../util';

export const getCharactersByPage = async (req: FastifyRequest, reply: FastifyReply): Promise<FastifyReply | void> => {
    const characterService = DEPENDENCY_CONTAINER.get(CharacterAppService);
    const { query } = req;
    const { page } = validateData<ICharacterPagination>(CharacterPageSchema, query);
    const response = await characterService.getCharactersByPage(page);
    return reply.send({ ...response });
};

export const getOneCharacter = async (req: FastifyRequest, reply: FastifyReply): Promise<FastifyReply | void> => {
    const characterService = DEPENDENCY_CONTAINER.get(CharacterAppService);
    const { params } = req;
    const { id } = validateData<ICharacterSearch>(CharacterSearchSchema, params);
    const response = await characterService.getOneCharacter(id);
    return reply.send({ ...response });
};

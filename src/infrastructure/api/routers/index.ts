import { getCharactersByPage, getOneCharacter } from './CharacterRouter';
import { FastifyInstance } from 'fastify';
import { addFriend, register, search, selectCharacter, update } from './UserRouter';
import { login } from './AuthRouter';
/* eslint-disable @typescript-eslint/no-unused-vars */
export const initRoutes = async (application: FastifyInstance): Promise<void> => {
    application.get('/users', { preValidation: [application.authenticate] }, search);
    application.post('/users', register);
    application.put(
        '/users/:id/character/:characterId',
        { preValidation: [application.authenticate] },
        selectCharacter,
    );
    application.put('/users', { preValidation: [application.authenticate] }, update);
    application.put('/users/friends/:friendId', { preValidation: [application.authenticate] }, addFriend);
    application.get('/characters', { preValidation: [application.authenticate] }, getCharactersByPage);
    application.get('/characters/:id', { preValidation: [application.authenticate] }, getOneCharacter);
    application.post('/login', login);
};

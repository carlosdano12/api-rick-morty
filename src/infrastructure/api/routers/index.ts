import { getCharactersByPage, getOneCharacter } from './CharacterRouter';
import { FastifyInstance } from 'fastify';
import { addFriend, register, removeFriend, search, selectCharacter, update } from './UserRouter';
import { login } from './AuthRouter';
import { schemaRegister, schemaUserData } from '../swagger';
import { schemaSelectCharacter } from '../swagger/schemas/SchemaSelectCharacter';
import { schemaUpdateUser } from '../swagger/schemas/SchemaUpdateUser';
import { schemaAddFriend } from '../swagger/schemas/SchemaAddFriend';
import { schemaRemoveFriend } from '../swagger/schemas/SchemaRemoveFriend';
import { schemaGetCharacterByPage } from '../swagger/schemas/SchemaCharacterByPage';
import { schemaGetOneCharacter } from '../swagger/schemas/SchemaGetOneCharacter';
import { schemaLogin } from '../swagger/schemas/SchemaLogin';

export const initRoutes = async (application: FastifyInstance): Promise<void> => {
    application.get('/users', { preValidation: [application.authenticate], schema: schemaUserData }, search);
    application.post('/users', { schema: schemaRegister }, register);
    application.put(
        '/users/character/:characterId',
        { preValidation: [application.authenticate], schema: schemaSelectCharacter },
        selectCharacter,
    );
    application.put('/users', { preValidation: [application.authenticate], schema: schemaUpdateUser }, update);
    application.put(
        '/users/friends/:friendId',
        { preValidation: [application.authenticate], schema: schemaAddFriend },
        addFriend,
    );
    application.delete(
        '/users/friends/:friendId',
        { preValidation: [application.authenticate], schema: schemaRemoveFriend },
        removeFriend,
    );
    application.get(
        '/characters',
        { preValidation: [application.authenticate], schema: schemaGetCharacterByPage },
        getCharactersByPage,
    );
    application.get(
        '/characters/:id',
        { preValidation: [application.authenticate], schema: schemaGetOneCharacter },
        getOneCharacter,
    );
    application.post('/login', { schema: schemaLogin }, login);
};

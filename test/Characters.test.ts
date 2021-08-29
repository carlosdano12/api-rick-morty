import { application } from '@infrastructure/api/Application';
import { createDependencyContainer } from '@configuration';
import { PREFIX, RICK_AND_MORTY_URL, TOKEN_TEST } from '@util';
import nock from 'nock';
import { fixtureDataApi } from './__mocks__';

describe('Testing App Request', () => {
    beforeAll(async () => {
        createDependencyContainer();
        nock(RICK_AND_MORTY_URL).persist(true).get('/character?page=2').reply(200, fixtureDataApi.CHARACTERS);
        nock(RICK_AND_MORTY_URL).persist(true).get('/character/21').reply(200, fixtureDataApi.CHARACTER_21);
    });

    it('debería retornar 200 y el array de personajes', async () => {
        const response = await application.inject({
            method: 'GET',
            url: `${PREFIX}/characters?page=2`,
            headers: { authorization: `Bearer ${TOKEN_TEST}` },
        });
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body).results).toBeDefined();
    });

    it('debería retornar 200 y la data del personaje 21', async () => {
        const response = await application.inject({
            method: 'GET',
            url: `${PREFIX}/characters/21`,
            headers: { authorization: `Bearer ${TOKEN_TEST}` },
        });
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body).id).toBe(21);
    });
});

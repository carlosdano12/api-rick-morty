import 'reflect-metadata';
import { injectable } from 'inversify';
import got from 'got';
import { IResponseApi } from '@domain/response';
import { RICK_AND_MORTY_URL } from '@util';
import { ICharacter } from '@domain/models';

@injectable()
export class RickAndMortyApiClient {
    async getCharactersByPage(page = 1): Promise<IResponseApi> {
        return got.get<IResponseApi>({
            url: `${RICK_AND_MORTY_URL}/character?page=${page}`,
            responseType: 'json',
            resolveBodyOnly: true,
        });
    }

    async getOneCharacter(id: number): Promise<ICharacter> {
        return got.get<ICharacter>({
            url: `${RICK_AND_MORTY_URL}/character/${id}`,
            responseType: 'json',
            resolveBodyOnly: true,
        });
    }
}

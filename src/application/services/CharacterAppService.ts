import { injectable } from 'inversify';
import { DEPENDENCY_CONTAINER } from '@configuration';
import { IResponseApi } from '@domain/response';
import { RickAndMortyApiClient } from '@infrastructure/api-client';
import { ICharacter } from '@domain/models';

@injectable()
export class CharacterAppService {
    private rickAndMortyApi = DEPENDENCY_CONTAINER.get(RickAndMortyApiClient);

    async getCharactersByPage(page: number): Promise<IResponseApi> {
        return this.rickAndMortyApi.getCharactersByPage(page);
    }

    async getOneCharacter(id: number): Promise<ICharacter> {
        return this.rickAndMortyApi.getOneCharacter(id);
    }
}

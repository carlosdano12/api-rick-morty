import { Container } from 'inversify';
import { Firestore } from '@google-cloud/firestore';
import { AuthAppService, CharacterAppService, UserAppService } from '@application/services';
import { firestore, mongodb, MongoUserRepository } from '@infrastructure/repositories';
import { UserRepository } from '@domain/repository';
import { TYPES } from '@configuration';
import { Db } from 'mongodb';
import { RickAndMortyApiClient } from '@infrastructure/api-client';

export const DEPENDENCY_CONTAINER = new Container();

export const createDependencyContainer = (): void => {
    DEPENDENCY_CONTAINER.bind<Firestore>(TYPES.Firestore).toConstantValue(firestore);
    DEPENDENCY_CONTAINER.bind<Db>(TYPES.MongoDB).toConstantValue(mongodb);
    DEPENDENCY_CONTAINER.bind(AuthAppService).toSelf().inSingletonScope();
    DEPENDENCY_CONTAINER.bind(UserAppService).toSelf().inSingletonScope();
    DEPENDENCY_CONTAINER.bind(CharacterAppService).toSelf().inSingletonScope();
    DEPENDENCY_CONTAINER.bind(RickAndMortyApiClient).toSelf().inSingletonScope();
    DEPENDENCY_CONTAINER.bind<UserRepository>(TYPES.MongoUserRepository).to(MongoUserRepository).inSingletonScope();
};

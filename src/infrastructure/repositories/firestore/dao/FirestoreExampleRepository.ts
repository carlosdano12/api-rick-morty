import { injectable } from 'inversify';
import { DEPENDENCY_CONTAINER, TYPES } from '@configuration';
import { Firestore } from '@google-cloud/firestore';
import { UserEntity } from '@domain/entities';
@injectable()
export class FirestoreExampleRepository {
    private firestore = DEPENDENCY_CONTAINER.get<Firestore>(TYPES.Firestore);
    private collection = 'testing';

    async save(model: UserEntity): Promise<void> {
        await this.firestore.collection(this.collection).add({ ...model });
    }
}

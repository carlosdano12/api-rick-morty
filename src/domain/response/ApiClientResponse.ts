import { ICharacter } from '@domain/models';

export interface IInfo {
    count: number;
    pages: number;
    next: string;
    prev?: string;
}

export interface IResponseApi {
    info: IInfo;
    results: ICharacter[];
}

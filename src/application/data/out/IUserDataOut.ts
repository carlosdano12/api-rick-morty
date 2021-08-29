import { IUserInfo } from '@domain/models';

export interface IInfoPagination {
    count: number;
    pages: number;
    next?: string | null;
    prev?: string | null;
}

export interface IUserDataOut {
    info: IInfoPagination;
    results: IUserInfo[];
}

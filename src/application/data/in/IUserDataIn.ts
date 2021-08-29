export interface IUserDataIn {
    id: string;
}

export interface IUserCharacterDataIn {
    characterId: number;
}

export interface IUserPagination {
    page?: number;
    limit?: number;
    search?: string;
}

export interface IUserDataUpdate {
    username?: string;
    name?: string;
    lastName?: string;
}

export interface IUserFriend {
    friendId: string;
}

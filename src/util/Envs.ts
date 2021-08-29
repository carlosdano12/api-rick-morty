export const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'development';

export const SECRET_KEY = process.env.SECRET_KEY || 't3st-k3y-4p1';

export const RICK_AND_MORTY_URL = 'https://rickandmortyapi.com/api';

export const API_URL =
    NODE_ENV === 'development'
        ? 'http://localhost:8080/api/v1'
        : 'https://api-rick-morty-carlos-salazar.herokuapp.com/api/v1';

export const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://<user>:<password>@cluster0.sn4qk.mongodb.net/test';
export const DB_NAME = process.env.DB_NAME || 'test';
export const PREFIX = '/api/v1';
export const TOKEN_TEST = process.env.TOKEN_TEST;

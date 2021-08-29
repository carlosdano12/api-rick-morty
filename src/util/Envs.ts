export const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'development';

export const SECRET_KEY = process.env.SECRET_KEY || 't3st-k3y-4p1';

export const RICK_AND_MORTY_URL = 'https://rickandmortyapi.com/api';

export const API_URL = NODE_ENV === 'development' ? 'http://localhost:8080/api/v1' : '';

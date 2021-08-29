export const schemaGetOneCharacter = {
    description: 'Optener un personaje',
    headers: {
        type: 'object',
        properties: {
            authorization: {
                type: 'string',
                description: 'api token',
            },
        },
        required: ['authorization'],
    },
    tags: ['Personajes'],
    params: {
        type: 'object',
        required: ['id'],
        properties: {
            id: { type: 'number', example: '1' },
        },
    },
    response: {
        '200-OK': {
            description: 'Succesful response',
            type: 'object',
            properties: {
                id: { type: 'number', example: '21' },
                name: { type: 'string', example: 'Aqua Morty' },
                status: { type: 'string', example: 'unknown' },
                species: { type: 'string', example: 'Humanoid' },
                type: { type: 'string', example: 'Fish-Person' },
                gender: { type: 'string', example: 'Male' },
                origin: {
                    type: 'object',
                    properties: {
                        name: { type: 'string', example: 'unknown' },
                        url: { type: 'string', example: '' },
                    },
                },
                location: {
                    type: 'object',
                    properties: {
                        name: { type: 'string', example: 'Citadel of Ricks' },
                        url: { type: 'string', example: 'https://rickandmortyapi.com/api/location/3' },
                    },
                    image: {
                        type: 'string',
                        example: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
                    },
                    episode: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    url: { type: 'string', example: 'https://rickandmortyapi.com/api/character/21' },
                    created: { type: 'string', example: '2017-11-04T22:39:48.055Z' },
                },
            },
        },
    },
};

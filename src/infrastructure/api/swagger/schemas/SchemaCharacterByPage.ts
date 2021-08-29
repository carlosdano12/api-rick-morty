export const schemaGetCharacterByPage = {
    description: 'Obtener personajes por pagina',
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
    querystring: {
        type: 'object',
        properties: {
            page: { type: 'number', example: '1' },
        },
    },
    response: {
        '200-OK': {
            descriprion: 'Succesful response',
            type: 'object',
            properties: {
                info: {
                    type: 'object',
                    properties: {
                        count: { type: 'number', example: '671' },
                        pages: { type: 'number', example: '34' },
                        next: {
                            type: 'string',
                            example:
                                'https://api-rick-morty-carlos-salazar.herokuapp.com/api/v1/users?page=3&limit=5&search=',
                        },
                        prev: {
                            type: 'string',
                            example:
                                'https://api-rick-morty-carlos-salazar.herokuapp.com/api/v1/users?page=1&limit=5&search=',
                        },
                    },
                },
                result: {
                    type: 'array',
                    items: {
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
            },
        },
    },
};

export const schemaUserData = {
    description: 'get all users',
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
    tags: ['Usuarios'],
    querystring: {
        type: 'object',
        properties: {
            page: { type: 'number', example: '1' },
            limit: { type: 'number', example: '1' },
            search: { type: 'string', example: 'carlos' },
        },
    },
    response: {
        '200-Ok': {
            description: 'Succesful response',
            type: 'object',
            properties: {
                info: {
                    type: 'object',
                    properties: {
                        count: { type: 'number', example: '8' },
                        pages: { type: 'number', example: '3' },
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
                results: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            _id: { type: 'string', example: '612b1a17bd50f68ed170aa83' },
                            username: { type: 'string', example: 'carlos' },
                            name: { type: 'string', example: 'calos' },
                            lastName: { type: 'string', example: 'salazar' },
                            email: { type: 'string', example: 'carlos@gmail.com' },
                        },
                    },
                },
            },
        },
    },
};

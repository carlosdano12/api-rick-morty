export const schemaUpdateUser = {
    description: 'Actualizar usuario',
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
    body: {
        type: 'object',
        properties: {
            username: { type: 'string', example: 'carlos' },
            name: { type: 'string', example: 'carlos' },
            lastname: { type: 'string', example: 'salazar' },
        },
    },
    response: {
        '204-No content': {},
    },
};

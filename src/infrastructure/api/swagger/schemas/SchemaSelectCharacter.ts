export const schemaSelectCharacter = {
    description: 'Permite seleccionar un personaje',
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
    params: {
        type: 'object',
        required: ['characterId'],
        properties: {
            characterId: { type: 'number', example: '1' },
        },
    },
    response: {
        '204-No content': {},
    },
};

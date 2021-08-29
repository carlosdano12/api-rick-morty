export const schemaRemoveFriend = {
    description: 'Eliminar un amigo',
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
        required: ['friendId'],
        properties: {
            friendId: { type: 'number', example: '1' },
        },
    },
    response: {
        '204-No content': {},
    },
};

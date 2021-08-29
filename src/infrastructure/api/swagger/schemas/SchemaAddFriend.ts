export const schemaAddFriend = {
    description: 'Agregar amigo',
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
            friendId: { type: 'string', example: '1' },
        },
    },
    response: {
        '204-No content': {},
    },
};

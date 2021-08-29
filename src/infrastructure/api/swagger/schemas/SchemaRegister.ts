export const schemaRegister = {
    description: 'post some data',
    tags: ['Registro'],
    body: {
        type: 'object',
        properties: {
            username: { type: 'string', example: 'carlos' },
            name: { type: 'string', example: 'Carlos' },
            lastName: { type: 'string', example: 'Salazar' },
            email: { type: 'string', example: 'carlos@gmail.com' },
            password: { type: 'string', example: 'my_password' },
        },
    },
    response: {
        '201-Created': {
            description: 'Succesful response',
            type: 'object',
            properties: {
                isError: { type: 'boolean', example: false },
                data: { type: 'null', example: null },
            },
        },
    },
};

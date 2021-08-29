export const schemaLogin = {
    description: 'Logear usuario',
    tags: ['Login'],
    body: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
            email: { type: 'string', example: 'carlos@gmail.com' },
            password: { type: 'string', example: 'my_password' },
        },
    },
    response: {
        '200-OK': {
            type: 'object',
            properties: {
                token: {
                    type: 'string',
                    example:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTJiMWExN2JkNTBmNjhlZDE3MGFhODMiLCJ1c2VybmFtZSI6ImNhcmxvcyIsIm5hbWUiOiJjYWxvcyIsImVtYWlsIjoiY2FybG9zQGdtYWlsLmNvbSIsImlhdCI6MTYzMDIyMjk3MywiZXhwIjoxNjMwMjMwMTczfQ.mKMcEgFgfDQDinYIJpsHGOjlYAXdUzGvkwPz16SAQXs',
                },
            },
        },
    },
};

import { FastifyDynamicSwaggerOptions } from 'fastify-swagger';

export const swagger_config: FastifyDynamicSwaggerOptions = {
    routePrefix: `/docs`,
    swagger: {
        info: {
            title: 'API Rick & Morty',
            description: 'Esta API permite gestionar los usuario del vídeo juego de Rick & Morty',
            version: '0.0.1',
            contact: {
                name: 'Carlos Salazar',
                email: 'carlosdano12@gmail.com',
            },
        },
        host: 'localhost:8080',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
    },
    exposeRoute: true,
    hideUntagged: true,
};

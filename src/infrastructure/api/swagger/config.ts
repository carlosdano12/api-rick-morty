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
        host: 'api-rick-morty-carlos-salazar.herokuapp.com',
        schemes: ['https'],
        consumes: ['application/json'],
        produces: ['application/json'],
    },
    exposeRoute: true,
    hideUntagged: true,
};

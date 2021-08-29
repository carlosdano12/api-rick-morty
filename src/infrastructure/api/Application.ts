// libraries
import 'reflect-metadata';
import 'module-alias/register';
import dotenv from 'dotenv';
dotenv.config();
import fastify, { FastifyPluginAsync, FastifyInstance } from 'fastify';
import { middlewares, errorHandler } from '@infrastructure/api/middlewares';
import { initRoutes } from '@infrastructure/api/routers';
import fastifyJWT from 'fastify-jwt';
import fp from 'fastify-plugin';
import { PREFIX, SECRET_KEY } from '@util';
import { swagger_config } from './swagger';
import fastifySwagger from 'fastify-swagger';
import { UnauthorizedException } from '@domain/exceptions';

export const application = fastify();

const validateToken: FastifyPluginAsync = async (fastify: FastifyInstance) => {
    try {
        fastify.register(fastifyJWT, { secret: SECRET_KEY });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fastify.decorate('authenticate', async (request: any, reply: any) => {
            try {
                await request.jwtVerify();
            } catch (err) {
                reply.send(new UnauthorizedException(err.message));
            }
        });
    } catch (error) {
        console.error(error);
    }
};

// middlewares
middlewares(application);
errorHandler(application);
application.register(fp(validateToken));

//swagger
application.register(fastifySwagger, swagger_config);

// routes
application.register(initRoutes, { prefix: PREFIX });

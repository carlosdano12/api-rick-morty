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
import { SECRET_KEY } from '@util';

export const application = fastify();

const validateToken: FastifyPluginAsync = async (fastify: FastifyInstance) => {
    try {
        fastify.register(fastifyJWT, { secret: SECRET_KEY });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fastify.decorate('authenticate', async (request: any, reply: any) => {
            try {
                await request.jwtVerify();
            } catch (err) {
                reply.send(err);
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

// routes
application.register(initRoutes, { prefix: `/api/v1` });

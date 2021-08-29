import { FastifyInstance } from 'fastify';
import cors from 'fastify-cors';
import helmet from 'fastify-helmet';
import formbody from 'fastify-formbody';

export const middlewares = (application: FastifyInstance): void => {
    application.register(cors);
    application.register(formbody);
    application.register(helmet);
};

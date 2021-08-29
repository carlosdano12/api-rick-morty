/* eslint-disable @typescript-eslint/no-unused-vars */
import * as fastify from 'fastify';
import { ServerResponse, IncomingMessage, Server } from 'http';

declare module 'fastify' {
    export interface FastifyInstance {
        authenticate(): void;
    }
}

import { FastifyError, FastifyInstance } from 'fastify';
import { ErrorCode, Exception } from '@domain/exceptions';

const buildErrorResponse = (error: FastifyError, statusCode?: number, errorCode?: ErrorCode) => {
    return {
        isError: true,
        message: error.message,
        code: error.code || errorCode,
        timestap: new Date(),
        statusCode: statusCode || error.statusCode,
    };
};

const translateError = (error: FastifyError) => {
    if (error instanceof SyntaxError) {
        return buildErrorResponse(error, 500, ErrorCode.SYNTAX_ERROR);
    }
    if (error instanceof Exception) return buildErrorResponse(error);
    console.error('log default traductor: ', error);
    return buildErrorResponse(error, 500, ErrorCode.UNKNOWN_ERROR);
};

export const errorHandler = (application: FastifyInstance): void => {
    application.setErrorHandler((error, req, reply) => {
        const exception = translateError(error);
        reply.statusCode = exception?.statusCode || 500;
        reply.send({ ...exception, id: req.id });
    });
};

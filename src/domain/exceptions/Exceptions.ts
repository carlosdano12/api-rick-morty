import { ErrorCode, StatusCode } from './ErrorCode';

export abstract class Exception {
    isError: boolean;
    message: string;
    code: ErrorCode;
    statusCode: number;
    cause: string | null;

    constructor(message: string, code: ErrorCode, statusCode: number, cause?: string) {
        this.isError = true;
        this.message = message;
        this.code = code;
        this.statusCode = statusCode;
        this.cause = cause || null;
    }
}

export class BadRequestException extends Exception {
    constructor(message: string) {
        super(message, ErrorCode.BAD_REQUEST, StatusCode.BAD_REQUEST);
    }
}

export class NotFoundException extends Exception {
    constructor(message: string) {
        super(message, ErrorCode.NOT_FOUND, StatusCode.NOT_FOUND);
    }
}

export class BadMessageException extends Exception {
    constructor(cause: string) {
        const message = 'Los datos de entrada no corresponden con el esquema definido';
        super(message, ErrorCode.BAD_MESSAGE, StatusCode.INTERNAL_ERROR, cause);
    }
}

export class RepositoryException extends Exception {
    constructor() {
        const message = 'Ocurrió un error con la DB';
        super(message, ErrorCode.REPOSITORY_ERROR, StatusCode.INTERNAL_ERROR);
    }
}

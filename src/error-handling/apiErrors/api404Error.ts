import {httpStatusCodes} from "../httpsStatusCode";
import {BaseError} from '../baseError';

export class Api404Error extends BaseError {
    constructor (
        public name: string,
        public statusCode = httpStatusCodes.NOT_FOUND,
        public description = 'Not Found',
        public isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

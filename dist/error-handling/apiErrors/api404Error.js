"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api404Error = void 0;
const httpsStatusCode_1 = require("../httpsStatusCode");
const baseError_1 = require("../baseError");
class Api404Error extends baseError_1.BaseError {
    constructor(name, statusCode = httpsStatusCode_1.httpStatusCodes.NOT_FOUND, description = 'Not Found', isOperational = true) {
        super(name, statusCode, isOperational, description);
        this.name = name;
        this.statusCode = statusCode;
        this.description = description;
        this.isOperational = isOperational;
    }
}
exports.Api404Error = Api404Error;

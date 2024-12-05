export class BaseError extends Error {
    constructor(public name: string,
                public statusCode: number,
                public isOperational: boolean,
                public description: string,) {
        super(description);

        Object.setPrototypeOf(this, new.target.prototype)
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
    }
}
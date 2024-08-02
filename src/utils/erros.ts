export default class ErrorCustom extends Error {
    private statusCode: number

    public constructor(
        message: string,
        options: {
            statusCode?: number,
            name: string,
            cause: string,
        }
    ) {
        super(message);
        
        this.statusCode = options.statusCode || 500;
        this.name = options.name
        this.cause = options.cause

        Error.captureStackTrace(this, this.constructor);
    }
}
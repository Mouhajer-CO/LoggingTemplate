import { Logger } from "winston";
import { Request } from "express";
export declare class ApplicationLogger {
    private readonly logger;
    constructor(logger: Logger);
    debug(message: string): void;
    info(message: string): void;
    error(message: string): void;
    debugRequest(request: Request, message: string): void;
    infoRequest(request: Request, message: string): void;
    errorRequest(request: Request, message: string): void;
}

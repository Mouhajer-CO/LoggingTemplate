import { Request } from "express";

import { LogMetaData } from "../type";

export const getRequestData = (request: Request): LogMetaData => {
    return {
        path: request.path,
        method: request.method
    };
};

import { DateTime } from "luxon";
import winston from "winston";
import { LoggerOptions } from "../type";

// TODO: add types

const setJsonMessage = (options: LoggerOptions, info: any) => {
    return {
        created: DateTime.now().toFormat(options.createdDateFormat),
        event: info.level,
        namespace: options.namespace,
        data: {
            message: info.message,
            path: info.path,
            method: info.method,
            status: info.status,
            duration: info.duration
        }
    };
};

export const createJsonFormat = (options: LoggerOptions) => {
    return winston.format.printf(function (info) {
        return JSON.stringify(setJsonMessage(options, info));
    });
}

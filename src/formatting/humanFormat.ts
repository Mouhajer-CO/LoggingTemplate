import { DateTime } from "luxon";
import winston from "winston";

import { LogMetaData, LoggerOptions } from "../type";

const setHumanMessage = (options: LoggerOptions, info: any): LogMetaData => {
    return {
        created: DateTime.now().toFormat(options.createdDateFormat),
        namespace: options.namespace,
        event: info.level,
        context: info.context,
        path: info.path,
        method: info.method,
        status: info.status,
        duration: info.duration
    };
};

export const createHumanFormat = (options: LoggerOptions) => {
    const colorizer = winston.format.colorize();

    // TO be changed
    return winston.format.printf(function (info) {

        const messageInfo: LogMetaData = setHumanMessage(options, info);
        const keys = Object.keys(messageInfo).sort();

        let message = colorizer.colorize(info.level, `${messageInfo.created} ${messageInfo.event}: ${info.message}`);

        keys.forEach(function (key) {
            if (messageInfo[key] !== undefined) {
                message += `\n  -> ${key}: ${messageInfo[key]}`;
            }
        });

        return message;
    });
}

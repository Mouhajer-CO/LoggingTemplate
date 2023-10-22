import { DateTime } from "luxon";
import winston from "winston";

import { LogMetaData } from "../type";

const setHumanMessage = (namespace: string, info: any): LogMetaData => {
    return {
        created: DateTime.now().toFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),
        namespace: namespace,
        event: info.level,
        context: info.context,
        path: info.path,
        method: info.method,
        status: info.status,
        duration: info.duration
    };
};

export const createHumanFormat = (namespace: string) => {
    const colorizer = winston.format.colorize();

    // TO be changed
    return winston.format.printf(function (info) {

        const messageInfo: LogMetaData = setHumanMessage(namespace, info);
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

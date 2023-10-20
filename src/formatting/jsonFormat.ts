import { DateTime } from "luxon";
import winston from "winston";

// TODO: add types

const setJsonMessage = (namespace: string, info: any) => {
    return {
        created: DateTime.now().toFormat("YYYY-MM-DDTHH:mm:ss.SSSZ"),
        event: info.level,
        namespace: namespace,
        context: info.context,
        data: {
            message: info.message,
            path: info.path,
            method: info.method,
            status: info.status,
            duration: info.duration
        }
    };
};

export const createJsonFormat = (namespace: string) => {
    return winston.format.printf(function (info) {
        return JSON.stringify(setJsonMessage(namespace, info));
    });
}

import { AbstractConfigSetColors, AbstractConfigSetLevels } from "winston/lib/winston/config";

export interface LoggerOptions {
    humanReadable: boolean;
    namespace: string;
    level: string;
    levels: AbstractConfigSetLevels;
    colours: AbstractConfigSetColors;
};

export interface LogMetaData {
    [index: string]: any;
    path: string;
    method: string;
    created?: string;
    namespace?: string;
    event?: string;
    status?: number;
};

import { AbstractConfigSetColors, AbstractConfigSetLevels } from "winston/lib/winston/config";

export const levels: AbstractConfigSetLevels = {
    error: 0,
    info: 1,
    debug: 2
};

export const colours: AbstractConfigSetColors = {
    error: "red",
    info: "yellow",
    debug: "green"
};

export const level: string = process.env.LOG_LEVEL === undefined ? "info" : process.env.LOG_LEVEL.toLowerCase();
export const humanReadable: boolean = process.env.HUMAN_LOG === undefined ? false : process.env.HUMAN_LOG === "1";

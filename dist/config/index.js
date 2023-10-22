"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createdDateFormat = exports.humanReadable = exports.level = exports.colours = exports.levels = void 0;
exports.levels = {
    error: 0,
    info: 1,
    debug: 2
};
exports.colours = {
    error: "red",
    info: "yellow",
    debug: "green"
};
exports.level = process.env.LOG_LEVEL === undefined ? "info" : process.env.LOG_LEVEL.toLowerCase();
exports.humanReadable = process.env.HUMAN_LOG === undefined ? false : process.env.HUMAN_LOG === "1";
exports.createdDateFormat = "yyyy-MM-dd HH:mm:ss.SSSZ";
//# sourceMappingURL=index.js.map
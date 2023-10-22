"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFormat = void 0;
const winston_1 = __importDefault(require("winston"));
const humanFormat_1 = require("./humanFormat");
const jsonFormat_1 = require("./jsonFormat");
const setFormat = (options) => {
    return {
        format: options.humanReadable ?
            (0, humanFormat_1.createHumanFormat)(options) :
            (0, jsonFormat_1.createJsonFormat)(options)
    };
};
const createFormat = (options) => {
    winston_1.default.addColors(options.colours);
    return winston_1.default.createLogger(Object.assign({ level: options.level, levels: options.levels, transports: [new winston_1.default.transports.Console()], handleExceptions: true, exitOnError: false }, setFormat(options)));
};
exports.createFormat = createFormat;
//# sourceMappingURL=index.js.map
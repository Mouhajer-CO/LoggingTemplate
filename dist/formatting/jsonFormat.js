"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJsonFormat = void 0;
const luxon_1 = require("luxon");
const winston_1 = __importDefault(require("winston"));
// TODO: add types
const setJsonMessage = (options, info) => {
    return {
        created: luxon_1.DateTime.now().toFormat(options.createdDateFormat),
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
const createJsonFormat = (options) => {
    return winston_1.default.format.printf(function (info) {
        return JSON.stringify(setJsonMessage(options, info));
    });
};
exports.createJsonFormat = createJsonFormat;
//# sourceMappingURL=jsonFormat.js.map
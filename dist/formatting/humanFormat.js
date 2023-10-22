"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHumanFormat = void 0;
const luxon_1 = require("luxon");
const winston_1 = __importDefault(require("winston"));
const setHumanMessage = (namespace, info) => {
    return {
        created: luxon_1.DateTime.now().toFormat("YYYY-MM-DDTHH:mm:ss.SSSZ"),
        namespace: namespace,
        event: info.level,
        context: info.context,
        path: info.path,
        method: info.method,
        status: info.status,
        duration: info.duration
    };
};
const createHumanFormat = (namespace) => {
    const colorizer = winston_1.default.format.colorize();
    // TO be changed
    return winston_1.default.format.printf(function (info) {
        const messageInfo = setHumanMessage(namespace, info);
        const keys = Object.keys(messageInfo).sort();
        let message = colorizer.colorize(info.level, `${messageInfo.created} ${messageInfo.event}: ${info.message}`);
        keys.forEach(function (key) {
            if (messageInfo[key] !== undefined) {
                message += `\n  -> ${key}: ${messageInfo[key]}`;
            }
        });
        return message;
    });
};
exports.createHumanFormat = createHumanFormat;
//# sourceMappingURL=humanFormat.js.map
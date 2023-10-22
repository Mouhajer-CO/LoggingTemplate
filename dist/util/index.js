"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestData = void 0;
const getRequestData = (request) => {
    return {
        path: request.path,
        method: request.method
    };
};
exports.getRequestData = getRequestData;
//# sourceMappingURL=index.js.map
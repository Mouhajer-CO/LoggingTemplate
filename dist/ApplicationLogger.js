"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationLogger = void 0;
const util_1 = require("./util");
class ApplicationLogger {
    constructor(logger) {
        this.logger = logger;
    }
    debug(message) {
        this.logger.debug(message);
    }
    info(message) {
        this.logger.info(message);
    }
    error(message) {
        this.logger.error(message);
    }
    debugRequest(request, message) {
        this.logger.debug(message, (0, util_1.getRequestData)(request));
    }
    infoRequest(request, message) {
        this.logger.info(message, (0, util_1.getRequestData)(request));
    }
    errorRequest(request, message) {
        this.logger.error(message, (0, util_1.getRequestData)(request));
    }
}
exports.ApplicationLogger = ApplicationLogger;
//# sourceMappingURL=ApplicationLogger.js.map
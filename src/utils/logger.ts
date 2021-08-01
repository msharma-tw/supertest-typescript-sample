import { Logger } from "tslog";

export default class TsLogger {

    log: Logger = new Logger();

    logError(message: string):void {
        this.log.error(message);
    }

    logInfo(message: string):void {
        this.log.info(message);
    }

    logDebug(message: string):void {
        this.log.debug(message);
    }

    logWarn(message: string):void {
        this.log.warn(message);
    }

    logTrace(message: string):void {
        this.log.trace(message);
    }

    logSilly(message: string):void {
        this.log.silly(message);
    }

    logFatal(message: string):void {
        this.log.fatal(new Error(message));
    }

}

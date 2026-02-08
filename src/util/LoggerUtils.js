import { DateTime } from 'luxon';
import winston, { format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import DevelopmentUtil from './DevelopmentUtil.js';
import ecsFormat from '@elastic/ecs-winston-format';

class LoggerUtil {
  #logger;

  constructor() {
    this.#initLogger();
  }

  #timezone = () => {
    return DateTime.now().setZone("Asia/Bangkok").toFormat('y-LL-dd HH:mm:ss');
  };

  #consoleLogFormatter() {
    return winston.format.combine(
      winston.format.colorize({
        all: true
      }),
      winston.format.label({
        label: '[LOGGER]'
      }),
      winston.format.timestamp({
        format: this.#timezone
      }),
      winston.format.printf((info) => {
        const { label, timestamp, level, message, stack } = info;
        return `[${label}] [${timestamp}] [${level}] : ${message} ${stack ? ' STACK: ' + stack : ''}`;
      })
    );
  }

  #fileLogFormatter() {
    return winston.format.combine(
      winston.format.label({
        label: '[LOGGER]'
      }),
      winston.format.timestamp({
        format: this.#timezone
      }),
      winston.format.printf(
        (info) =>
          `[${info.label}] [${info.timestamp}] ${info.level.toUpperCase()} : ${JSON.stringify(info.message)} ${info.stack ? ' STACK: ' + info.stack : ''
          }`
      )
    );
  }

  #initLogger() {
    this.#logger = winston.createLogger({
      level: 'info',
      format: ecsFormat({ convertReqRes: true }),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(winston.format.colorize(), this.#consoleLogFormatter())
        }),
        new DailyRotateFile({
          // filename: this.#getFilename(),
          filename: '%DATE%.log',
          dirname: 'logs',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d'
          // format: winston.format.combine(this.#fileLogFormatter())
        })
      ],
      silent: DevelopmentUtil.isTestEnvironment()
    });
  }

  #getFilename() {
    const { day, month, year } = DateTime.now();
    return `${year}-${month}-${day}.log`;
  }

  get logger() {
    if (this.#logger === undefined || this.#logger === null) {
      this.#initLogger();
    }

    return this.#logger;
  }

  error(event, exception) {
    this.#logger.error({
      event,
      error_message: exception.message,
      errors: exception.name,
      stack: exception.stack,
      body: exception.details?.body
    });
  }

  warn(event, exception) {
    this.#logger.warn({
      event,
      error_message: exception.message,
      errors: exception.name,
      stack: exception.stack,
      body: exception.details?.body
    });
  }

  info(event, info) {
    this.#logger.info({ event, ...info })
  }
}
const LoggerUtilSingleton = Object.freeze(new LoggerUtil());

export default LoggerUtilSingleton;

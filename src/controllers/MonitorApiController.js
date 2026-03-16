import fs from 'fs';
import zlib from 'node:zlib';
import { StatusCodes } from 'http-status-codes';
import { DateTime } from 'luxon';
import readline from 'readline';
import LogEvent from '../constants/LogEvent.js';
import buildResponse from '../util/buildResponse.js';
import LoggerUtilSingleton from '../util/LoggerUtils.js';

class MonitorApiController {
  #monitorApiService;
  constructor(monitorApiService) {
    this.#monitorApiService = monitorApiService;
    this.getLog = this.getLog.bind(this);
    this.healthCheck = this.healthCheck.bind(this);
  }

  async getLog(request, response) {
    const { date = DateTime.now().toISODate() } = request.query;
    const logFilename = `logs/${date}.log`;
    if (fs.existsSync(logFilename)) {
      return response.download(logFilename, (error) => {
        if (error) {
          LoggerUtilSingleton.warn(LogEvent.MONITOR_API, `Error fetch ${logFilename}. Reason: ${error}`);
        }
      });
    }

    const logArchiveFilename = `logs/${date}.log.gz`;
    if (fs.existsSync(logArchiveFilename)) {
      return response.download(logArchiveFilename, (error) => {
        if (error) {
          LoggerUtilSingleton.warn(LogEvent.MONITOR_API, `Error fetch ${logArchiveFilename}. Reason: ${error}`);
        }
      });
    }

    return response.status(StatusCodes.NOT_FOUND).json(buildResponse(StatusCodes.NOT_FOUND, 'LOG FILE NOT FOUND'));
  }

  async healthCheck(request, response) {
    const { date = DateTime.now().toISODate() } = request.query;
    const logFilename = `logs/${date}.log`;
    const logGzFilename = `logs/${date}.log.gz`;
    const payload = {};

    if (fs.existsSync(logFilename)) {
      Object.assign(payload, { logs: await this.#readLogFile(logFilename) });
    }

    if (fs.existsSync(logGzFilename)) {
      Object.assign(payload, { logs: await this.#readLogGz(logGzFilename) });
    }

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success fetch logs', payload));
  }

  async #readLogFile(logFilename) {
    const logFile = readline.createInterface({
      input: fs.createReadStream(logFilename),
      output: process.stdout,
      terminal: false
    });

    const logs = [];
    for await (const line of logFile) {
      const logObject = JSON.parse(line);
      if (logObject.message.event === 'API') {
        const parsedLog = JSON.parse(line);

        this.calculateProcessTime(parsedLog);
        logs.unshift(parsedLog.message);
      }
    }

    return logs;
  }

  async #readLogGz(logFilename) {
    const logFile = readline.createInterface({
      input: fs.createReadStream(logFilename).pipe(zlib.createGunzip()),
      output: process.stdout,
      terminal: false
    });

    const logs = [];
    for await (const line of logFile) {
      const logObject = JSON.parse(line);
      if (logObject.message.event === 'API') {
        const parsedLog = JSON.parse(line);

        this.calculateProcessTime(parsedLog);
        logs.unshift(parsedLog.message);
      }
    }

    return logs;
  }

  calculateProcessTime(log) {
    if (log.message.endApi == null || log.message.startApi == null) {
      return;
    }

    const date1 = DateTime.fromFormat(log.message.endApi, 'yyyy-MM-dd HH:mm:ss');
    const date2 = DateTime.fromFormat(log.message.startApi, 'yyyy-MM-dd HH:mm:ss');

    const { values } = date1.diff(date2, ['seconds']);
    log.message.processTime = values.seconds;
  }
}

export default MonitorApiController;

import { DateTime } from 'luxon';
import LogAPI from '../models/LogAPI.js';
import LoggerUtilSingleton from '../util/LoggerUtils.js';
import resDotSendInterceptor from './resDotSendInterceptor.js';
import Constant from '../constants/Constant.js';
import LogEvent from '../constants/LogEvent.js';

const extractToken = (request) => request.get('Authorization')?.split(' ')[1] ?? '';

const logMiddleware = (request, response, next) => {
  const excludedRoute = ['api-docs', '/v1/health-check'];
  response.send = resDotSendInterceptor(response, response.send);
  const startApi = DateTime.now().setZone("Asia/Bangkok").toFormat('y-LL-dd HH:mm:ss');
  
  response.on('finish', () => {
    if (!excludedRoute.includes(request.originalUrl)) {
      const responseObject = {
        uri: request.get('host') + request.originalUrl,
        method: request.method,
        params: JSON.stringify(request.body),
        apiKey: extractToken(request).substring(0, 40),
        ipAddress: request.body.user_ip,
        time: typeof request.body.time === 'undefined' ? 0 : request.body.time,
        rtime: typeof request.body.rtime === 'undefined' ? 0 : request.body.rtime,
        authorized: response.contentBody,
        responseCode: response.statusCode,
        cretime: DateTime.now().setZone("Asia/Bangkok").toFormat('y-LL-dd HH:mm:ss'),
        creby: request.body.creby_log
      };
      const endApi = DateTime.now().setZone("Asia/Bangkok").toFormat('y-LL-dd HH:mm:ss');
      const contentType = request.headers['content-type'];
      LoggerUtilSingleton.info(LogEvent.API, { ...responseObject, startApi, endApi, contentType });
      LogAPI.create(responseObject);
    }
  });

  next();
};

export default logMiddleware;

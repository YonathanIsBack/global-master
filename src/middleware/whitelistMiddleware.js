import 'dotenv/config';
import lodash from 'lodash';
import buildResponse from '../util/buildResponse.js';
import { StatusCodes } from 'http-status-codes';
import LoggerUtilSingleton from '../util/LoggerUtils.js';
import LogEvent from '../constants/LogEvent.js';

const whitelistMiddleware = (request, response, next) => {
  const whitelistedIp = process.env.WHITELISTED_IP;

  if (lodash.isEmpty(whitelistedIp) || whitelistedIp === "*") {
    return next();
  }

  const whitelistedIps = whitelistedIp.split(',');
  if (!whitelistedIps.includes(request.body.user_ip)) {
    LoggerUtilSingleton.info(LogEvent.NON_WHITELISTED_IP, { info: `User with IP ${request.body.user_ip} rejected`, timestamp: new Date() })

    return response
      .status(StatusCodes.FORBIDDEN)
      .json(buildResponse(StatusCodes.FORBIDDEN, "THIS IP IS NOT ALLOWED"));
  }

  return next();
}

export default whitelistMiddleware;
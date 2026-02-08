import { ValidationError } from 'express-validation';
import { StatusCodes } from 'http-status-codes';
import sequelize from 'sequelize';
import buildResponse from '../util/buildResponse.js';
import LoggerUtilSingleton from '../util/LoggerUtils.js';
import Constant from '../constants/Constant.js';
import LogEvent from '../constants/LogEvent.js';

const errorMiddleware = (errorException, request, response, next) => {
  LoggerUtilSingleton.error(LogEvent.API, errorException);

  if (errorException instanceof sequelize.ValidationError) {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json(buildResponse(StatusCodes.BAD_REQUEST, { cause: errorException.message }));
  }

  if (errorException instanceof ValidationError) {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json(buildResponse(StatusCodes.BAD_REQUEST, errorException.message, { cause: errorException.details }));
  }

  const { statusCode, message } = errorException;

  if (statusCode === undefined || statusCode === null) {
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(buildResponse(StatusCodes.INTERNAL_SERVER_ERROR, 'Something went wrong!!', { cause: errorException.message }));
  }

  response.status(statusCode).json(buildResponse(statusCode, message));
};

export default errorMiddleware;

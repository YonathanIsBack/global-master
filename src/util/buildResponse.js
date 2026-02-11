import lodash from 'lodash';
import ObjectUtil from './ObjectUtil.js';

const buildResponse = (statusCode, message, payload, res) => {
  const response = { status: statusCode, api_message: message, valid: true };

  if (payload === undefined || payload === null) {
    return response;
  }

  if (!ObjectUtil.isObject(payload)) {
    return { ...response, data: payload };
  }

  const data = {};
  const keys = Object.keys(payload);

  keys.map((key) => {
    data[lodash.snakeCase(key)] = payload[key];
  });

  return { ...response, data, res };
};

export default buildResponse;

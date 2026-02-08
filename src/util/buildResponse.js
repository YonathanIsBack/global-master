import lodash from 'lodash';

const buildResponse = (statusCode, message, payload) => {
const response = { status: statusCode, message: message };

  if (payload === undefined || payload === null) {
    return response;
  }

  const data = {};
  const keys = Object.keys(payload);

  keys.map((key) => {
    data[lodash.snakeCase(key)] = payload[key];
  });

  return { ...response, data };
};

export default buildResponse;

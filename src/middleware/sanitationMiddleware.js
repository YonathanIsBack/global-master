import ObjectUtil from "../util/ObjectUtil.js";

const sanitizeDetails = (details) => {
  return details.map(detail => {
    if(detail == null) {
      return detail;
    }
    
    const detailKey = Object.keys(detail);
    detailKey.forEach(key => {
      if(!ObjectUtil.isObject(detail)) {
        return;
      }

      detail[key] = ObjectUtil.defaultEmptyString(detail[key]);
    });
    return detail;
  });
}

const sanitationMiddleware = () => {
  return (request, response, next) => {
    const { body } = request;
    const keys = Object.keys(body);

    request.body = Object.assign({}, ...keys.map(key => {
      if (key === 'no_transaction_count' || key === 'log_master') {
        return { [key]: body[key] };
      }
      if (Array.isArray(body[key])) {
        return { [key]: sanitizeDetails(body[key]) };
      }

      return { [key]: ObjectUtil.defaultEmptyString(body[key]) };
    })
    );

    next();
  };
}

export default sanitationMiddleware;
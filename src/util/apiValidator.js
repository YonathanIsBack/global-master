import { Joi } from 'express-validation';
import lodash from 'lodash';

const apiValidator = (model) => {
  const primaryKey = lodash.snakeCase(model.primaryKeyAttributes[0]);
  return {
    body: Joi.object({
      [primaryKey]: Joi.number().required()
    }).options({allowUnknown: true})
  };
};

export default apiValidator;

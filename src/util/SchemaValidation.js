import { Joi } from 'express-validation';
import lodash from 'lodash';
import TableDetailException from '../exception/TableDetailException.js';

class SchemaValidation {
  static validateDataByModel(data, model) {
    const primaryKey = lodash.snakeCase(model.primaryKeyAttributes[0]);

    const schema = Joi.object({
      [primaryKey]: Joi.number().required()
    }).options({ allowUnknown: true });

    const { error } = schema.validate(data);

    if (error) throw new TableDetailException(model, error);
  }
}

export default SchemaValidation;

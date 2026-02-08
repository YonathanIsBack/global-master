import { Joi } from 'express-validation';

const departmentSchema = {
  body: Joi.object({
    id: Joi.string(),
    department_code: Joi.string(),
    department_name: Joi.string(),
    isactive: Joi.string(),
    creby: Joi.string(),
    cretime: Joi.string(),
    modby: Joi.string(),
    modtime: Joi.string(),
    user_id: Joi.string(),
    user_ip: Joi.string()
  })
};

export { departmentSchema };

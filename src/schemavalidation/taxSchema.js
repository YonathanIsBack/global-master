import { Joi } from 'express-validation';

const createTaxSchema = {
  body: Joi.object({
    id: Joi.string(),
    tax_name: Joi.string(),
    tax_type: Joi.string(),
    percentage: Joi.number(),
    note: Joi.string(),
    defaults: Joi.string(),
    isactive: Joi.string(),
    isdel: Joi.string(),
    creby: Joi.string(),
    cretime: Joi.string(),
    modby: Joi.string(),
    modtime: Joi.string(),
    user_id: Joi.string(),
    user_ip: Joi.string()
  })
};

export { createTaxSchema };

import { Joi } from 'express-validation';

const createCountrySchema = {
  body: Joi.object({
    country_id: Joi.string(),
    country_code: Joi.string(),
    country_name: Joi.string(),
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

export { createCountrySchema };

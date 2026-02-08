import { Joi } from 'express-validation';

const createProvinceSchema = {
  body: Joi.object({
    id: Joi.string(),
    province_code: Joi.string(),
    province_name: Joi.string(),
    country_id: Joi.number(),
    isactive: Joi.string(),
    isdel: Joi.string().empty(''),
    creby: Joi.string(),
    cretime: Joi.string(),
    modby: Joi.string(),
    modtime: Joi.string(),
    user_id: Joi.string(),
    user_ip: Joi.string()
  })
};

export { createProvinceSchema };

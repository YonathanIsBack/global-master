import { Joi } from 'express-validation';

const locationSchema = {
  body: Joi.object({
    id: Joi.string(),
    location_code: Joi.string(),
    location_name: Joi.string(),
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

export { locationSchema };

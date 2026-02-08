import { Joi } from 'express-validation';

const createShippingSchema = {
  body: Joi.object({
    id: Joi.string(),
    shipping_name: Joi.string(),
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

export { createShippingSchema };

import { Joi } from 'express-validation';

const createCurrencySchema = {
  body: Joi.object({
    currency_id: Joi.string(),
    currency_code: Joi.string(),
    currency_name: Joi.string(),
    currency_symbol: Joi.string(),
    country_id: Joi.number(),
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

export { createCurrencySchema };

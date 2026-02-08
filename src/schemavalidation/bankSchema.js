import { Joi } from 'express-validation';

const createBankSchema = {
  body: Joi.object({
    bank_id: Joi.string(),
    bank_code: Joi.string(),
    bank_name: Joi.string(),
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

export { createBankSchema };

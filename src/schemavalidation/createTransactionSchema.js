import { Joi } from 'express-validation';

const createTransactionSchema = {
  body: Joi.object({
    id: Joi.string(),
    no_transaction_name: Joi.string(),
    no_transaction_prefix: Joi.string(),
    digit: Joi.number(),
    reset_time: Joi.number(),
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

export { createTransactionSchema };

import { Joi } from 'express-validation';

const createPaymentTermSchema = {
  body: Joi.object({
    id: Joi.string(),
    payment_term_name: Joi.string(),
    due_date: Joi.number(),
    early_payment_days: Joi.number(),
    early_payment_disc: Joi.number(),
    isdefault: Joi.string().empty(''),
    ispay: Joi.string().empty(''),
    isactive: Joi.string(),
    creby: Joi.string(),
    cretime: Joi.string(),
    modby: Joi.string(),
    modtime: Joi.string(),
    user_id: Joi.string(),
    user_ip: Joi.string()
  })
};

export { createPaymentTermSchema };

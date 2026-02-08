import { Joi } from 'express-validation';

const createStratumSchema = {
  body: Joi.object({
    id: Joi.string(),
    stratum_code: Joi.string(),
    stratum_name: Joi.string(),
    isactive: Joi.string(),
    creby: Joi.string(),
    cretime: Joi.string(),
    modby: Joi.string(),
    modtime: Joi.string(),
    user_id: Joi.string(),
    user_ip: Joi.string()
  })
};

export { createStratumSchema };

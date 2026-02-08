import { Joi } from 'express-validation';

const deleteSchema = {
  body: Joi.object({
    id: Joi.string(),
    creby: Joi.string(),
    cretime: Joi.string(),
    modby: Joi.string(),
    modtime: Joi.string(),
    user_id: Joi.string(),
    user_ip: Joi.string()
  })
};

const restoreSchema = {
  body: Joi.object({
    id: Joi.string(),
    creby: Joi.string(),
    cretime: Joi.string(),
    modby: Joi.string(),
    modtime: Joi.string(),
    user_id: Joi.string(),
    user_ip: Joi.string()
  })
};
export { deleteSchema, restoreSchema };

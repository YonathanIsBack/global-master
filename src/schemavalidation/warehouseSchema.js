import { Joi } from 'express-validation';

const createWarehouseSchema = {
  body: Joi.object({
    id: Joi.string(),
    warehouse_code: Joi.string(),
    customer_id: Joi.string(),
    warehouse_level_id: Joi.string(),
    warehouse_link_id: Joi.string(),
    warehouse_name: Joi.string(),
    warehouse_initial: Joi.string(),
    warehouse_addr: Joi.string(),
    warehouse_country_id: Joi.string(),
    warehouse_province_id: Joi.string(),
    warehouse_postal_code: Joi.string(),
    warehouse_phone: Joi.string(),
    note: Joi.string(),
    isimport: Joi.number(),
    isexport: Joi.number(),
    islocal: Joi.number(),
    isconsignment: Joi.number(),
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

export { createWarehouseSchema as createProvinceSchema };

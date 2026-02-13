import { Country } from '../../models/Country.js';
import { Customer } from '../../models/Customer.js';
import Province from '../../models/Province.js';
import SequelizeUtil from '../../util/SequelizeUtil.js';
import StandardService from '../StandardService.js';

class CustomerService extends StandardService {
  columnOrder = [
    '',
    'customer_code',
    'customer_name',
    'customer_nick_name',
    'customer_addr',
    SequelizeUtil.getSequelizeCol('country_name'),
    SequelizeUtil.getSequelizeCol('province_name'),
    'customer_postal_code',
    'customer_phone',
    'customer_owner',
    'isactive'
  ];
  columnSearch = [
    'cretime',
    'customer_code',
    'customer_name',
    'customer_nick_name',
    'customer_addr',
    '$Country.country_name$',
    '$Province.province_name$',
    'customer_postal_code',
    'customer_phone',
    'customer_owner'
  ];

  constructor() {
    super(Customer);
  }

  async count({ whereClause } = {}) {
    return await this.model.count({
      where: whereClause ?? null,
      include: [
        {
          model: Province,
          required: false
        },
        {
          model: Country,
          required: false
        }
      ]
    });
  }

  async getAll(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection } = params;

    const results = await this.model.findAll({
      where: whereClause,
      raw: true,
      limit: Number(limit),
      offset: Number(offset),
      order: this.buildOrderClause(orderIndex, orderDirection),
      include: [
        {
          model: Province,
          required: false
        },
        {
          model: Country,
          required: false
        }
      ]
    });

    return results.map((result) => ({
      ...result,
      countryName: result['Country.countryName'],
      provinceName: result['Province.provinceName']
    }));
  }
}

export default CustomerService;

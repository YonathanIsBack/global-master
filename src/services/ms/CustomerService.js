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
}

export default CustomerService;

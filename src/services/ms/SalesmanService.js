import { User } from '../../models/User.js';
import SequelizeUtil from '../../util/SequelizeUtil.js';
import StandardService from '../StandardService.js';

export default class SalesmanService extends StandardService {
  columnOrder = [
    '',
    SequelizeUtil.getSequelizeCol('User.username'),
    'salesman_name',
    'salesman_code',
    'iscommission',
    'isactive'
  ];
  columnSearch = ['$User.username$', 'salesman_name', 'salesman_code', 'iscommission', 'isactive'];

  constructor(model) {
    super(model);
  }

  async count({ whereClause } = {}) {
    return await this.model.count({
      where: whereClause ?? null,
      include: [
        {
          model: User,
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
          model: User,
          required: false
        }
      ]
    });

    return results.map((result) => ({
      ...result,
      username: result['User.username']
    }));
  }
}

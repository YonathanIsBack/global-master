import { Sequelize } from 'sequelize';
import { Country } from '../models/Country.js';
import Province from '../models/Province.js';
import StandardService from './StandardService.js';
import SequelizeUtil from '../util/SequelizeUtil.js';

class ProvinceService extends StandardService {
  columnOrder = ['', 'province_code', 'province_name', SequelizeUtil.getSequelizeCol('Country.country_name'), 'isactive'];
  columnSearch = ['province_code', 'province_name', '$Country.country_name$'];

  constructor() {
    super(Province);
  }

  async count({ whereClause } = {}) {
    return await this.model.count({
      where: whereClause ?? null,
      include: [
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
          model: Country,
          required: false
        }
      ]
    });

    return results.map((result) => ({
      ...result,
      countryName: result['Country.countryName']
    }));
  }
}

export default ProvinceService;

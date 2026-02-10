import { Country } from '../models/Country.js';
import Province from '../models/Province.js';
import StandardService from './StandardService.js';

class ProvinceService extends StandardService {
  constructor() {
    super(Province);
  }

  async getAll(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection } = params;

    const results = await this.model.findAll(
      {
        where: whereClause,
        raw: true,
        limit: Number(limit),
        offset: Number(offset),
        order: this.buildOrderClause(orderIndex, orderDirection),
        include: [{
          model: Country,
          required: false
        }]
      });

    return results.map(result => ({
      ...result,
      countryName: result['Country.countryName']
    }));
  };
}

export default ProvinceService;

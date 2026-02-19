import StandardService from '../StandardService.js';

class CoaTypeService extends StandardService {
  columnOrder = ['', 'coa_code', 'coa_name', 'isactive'];
  columnSearch = ['cretime', 'coa_code', 'coa_name'];

  constructor(model) {
    super(model);
  }

  async count({ whereClause } = {}) {
    const additionalClause = { level: 0, coaParentId: 0, ...whereClause };
    return await this.model.count({
      where: additionalClause
    });
  }

  async getAll(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection } = params;
    const additionalClause = { level: 0, coaParentId: 0, ...whereClause };

    const results = await this.model.findAll({
      where: additionalClause,
      raw: true,
      limit: Number(limit),
      offset: Number(offset),
      order: this.buildOrderClause(orderIndex, orderDirection)
    });

    return results.map((result) => ({
      ...result
    }));
  }
}

export default CoaTypeService;

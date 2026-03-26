import { BuyingPriceList, BuyingPriceListDetail } from '../../../models/BuyingPriceList.js';
import StandardService from '../../StandardService.js';

class TrSalesTargetService extends StandardService {
  columnOrder = ['', 'target_name', 'target_type', 'isactive'];
  columnSearch = ['cretime', 'target_name', 'target_type'];

  constructor(model) {
    super(model);
  }

  async getAll(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection, include = [] } = params;

    const results = await this.model.findAll({
      where: whereClause,
      limit: Number(limit),
      offset: Number(offset),
      order: this.buildOrderClause(orderIndex, orderDirection),
      nest: true,
      include
    });

    return results.map((result) => ({ ...result.get({ plain: true }) }));
  }
}

export default TrSalesTargetService;

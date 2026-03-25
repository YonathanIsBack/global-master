import { BuyingPriceList, BuyingPriceListDetail } from '../../../models/BuyingPriceList.js';
import StandardService from '../../StandardService.js';

class BuyingPriceListService extends StandardService {
  columnOrder = ['', 'name', 'publish_time', 'isactive'];
  columnSearch = ['cretime', 'name', 'publish_time'];

  constructor() {
    super(BuyingPriceList);
  }

  async getAll(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection, include = [] } = params;

    const results = await this.model.findAll({
      where: whereClause,
      // raw: true,
      limit: Number(limit),
      offset: Number(offset),
      order: this.buildOrderClause(orderIndex, orderDirection),
      nest: true,
      include
    });

    return results.map((result) => ({ ...result.get({ plain: true }) }));
  }
}

export default BuyingPriceListService;

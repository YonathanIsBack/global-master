import { Op } from 'sequelize';
import { ItemCategory, ItemSubcategory } from '../../models/Item.js';
import SequelizeUtil from '../../util/SequelizeUtil.js';
import StandardService from '../StandardService.js';

export default class ItemSubCategoryService extends StandardService {
  columnOrder = [
    '',
    SequelizeUtil.getSequelizeCol('ItemCategory.item_category_name'),
    'item_category_code',
    'item_category_name',
    'isactive'
  ];
  columnSearch = ['$ItemCategory.item_category_name$', 'item_category_code', 'item_category_name', 'isactive'];

  constructor() {
    super(ItemSubcategory);
  }

  async count({ whereClause } = {}) {
    const additionalClause = { itemCategoryParentId: { [Op.ne]: 0 } , ...whereClause};
    return await this.model.count({
      where: additionalClause,
      include: [
        {
          model: ItemCategory,
          required: false
        }
      ]
    });
  }

  async getAll(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection } = params;
    const additionalClause = { itemCategoryParentId: { [Op.ne]: 0 } , ...whereClause};

    const results = await this.model.findAll({
      where: additionalClause,
      raw: true,
      limit: Number(limit),
      offset: Number(offset),
      order: this.buildOrderClause(orderIndex, orderDirection),
      include: [
        {
          model: ItemCategory,
          required: false
        }
      ]
    });

    return results.map((result) => ({
      ...result,
      itemCategoryParentName: result['ItemCategory.itemCategoryName']
    }));
  }
}

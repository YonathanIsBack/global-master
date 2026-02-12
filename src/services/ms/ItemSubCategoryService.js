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
  columnSearch = [
    '$ItemCategory.item_category_name$',
    'item_category_code',
    'item_category_name',
    'isactive'
  ];

  constructor() {
    super(ItemSubcategory);
  }

  async count({ whereClause } = {}) {
    return await this.model.count({
      where: whereClause ?? null,
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

    const results = await this.model.findAll({
      where: whereClause,
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

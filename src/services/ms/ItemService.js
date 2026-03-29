import Brand from '../../models/Brand.js';
import { Item, ItemCategory, ItemType, ItemUom } from '../../models/Item.js';
import SequelizeUtil from '../../util/SequelizeUtil.js';
import StandardService from '../StandardService.js';

export default class ItemService extends StandardService {
  columnOrder = [
    '',
    'item_code',
    'item_name',
    SequelizeUtil.getSequelizeCol('ItemCategory.item_category_name'),
    SequelizeUtil.getSequelizeCol('ItemCategorySub.item_category_name'),
    SequelizeUtil.getSequelizeCol('Brand.brand_name'),
    SequelizeUtil.getSequelizeCol('ItemType.item_type_name'),
    SequelizeUtil.getSequelizeCol('ItemUom.item_uom_name'),
    'isactive'
  ];
  columnSearch = [
    'item_code',
    'item_name',
    '$ItemCategory.item_category_name$',
    '$ItemCategorySub.item_category_name$',
    '$Brand.brand_name$',
    '$ItemType.item_type_name$',
    '$ItemUom.item_uom_name$',
    'isactive'
  ];

  constructor() {
    super(Item);
  }

  async count({ whereClause } = {}) {
    return await this.model.count({
      where: whereClause ?? null,
      include: [
        {
          model: ItemCategory,
          required: false
        },
        {
          model: ItemCategory,
          required: false,
          as: 'ItemCategorySub'
        },
        {
          model: Brand,
          required: false
        },
        {
          model: ItemType,
          required: false
        },
        {
          model: ItemUom,
          required: false
        }
      ]
    });
  }
}

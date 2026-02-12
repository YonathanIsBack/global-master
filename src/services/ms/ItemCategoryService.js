import { ItemCategory } from '../../models/Item.js';
import StandardService from '../StandardService.js';

export default class ItemCategoryService extends StandardService {
  columnOrder = ['', 'item_category_code', 'item_category_name', 'isactive'];
  columnSearch = ['item_category_code', 'item_category_name', 'isactive'];

  constructor() {
    super(ItemCategory);
  }
}

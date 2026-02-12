import { ItemType } from '../../models/Item.js';
import StandardService from '../StandardService.js';

export default class ItemTypeService extends StandardService {
  columnOrder = ['', 'item_type_name', 'isstock', 'isactive'];
  columnSearch = ['item_type_name', 'isstock', 'isactive'];

  constructor() {
    super(ItemType);
  }
}

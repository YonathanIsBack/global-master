import { ItemUom } from '../../models/Item.js';
import StandardService from '../StandardService.js';

export default class ItemUomService extends StandardService {
  columnOrder = ['', 'item_uom_code', 'item_uom_name', 'isactive'];
  columnSearch = ['item_uom_code', 'item_uom_name', 'isactive'];

  constructor() {
    super(ItemUom);
  }
}

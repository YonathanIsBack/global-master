import { SupplierGroup } from '../../models/Supplier.js';
import StandardService from '../StandardService.js';

class SupplierGroupService extends StandardService {
  columnOrder = ['', 'supplier_group_code', 'supplier_group_name', 'isactive'];
  columnSearch = ['cretime', 'supplier_group_code', 'supplier_group_name'];

  constructor() {
    super(SupplierGroup);
  }
}

export default SupplierGroupService;

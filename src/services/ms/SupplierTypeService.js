import { SupplierType } from '../../models/Supplier.js';
import StandardService from '../StandardService.js';

class SupplierTypeService extends StandardService {
  columnOrder = ["", "supplier_type_name", "supplier_type_code", "isactive"];
  columnSearch = ["cretime", "supplier_type_name", "supplier_type_code"];

  constructor() {
    super(SupplierType);
  }
}

export default SupplierTypeService;

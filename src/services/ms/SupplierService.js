import { Supplier } from '../../models/Supplier.js';
import StandardService from '../StandardService.js';

class SupplierService extends StandardService {
  columnOrder = ["", "supplier_name", "supplier_code", "isactive"];
  columnSearch = ["cretime", "supplier_name", "supplier_code"];

  constructor() {
    super(Supplier);
  }
}

export default SupplierService;

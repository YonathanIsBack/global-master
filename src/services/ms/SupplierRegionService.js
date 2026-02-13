import { SupplierRegion } from '../../models/Supplier.js';
import StandardService from '../StandardService.js';

class SupplierRegionService extends StandardService {
  columnOrder = ['', 'supplier_region_name', 'supplier_region_code', 'isactive'];
  columnSearch = ['cretime', 'supplier_region_name', 'supplier_region_code'];

  constructor() {
    super(SupplierRegion);
  }
}

export default SupplierRegionService;

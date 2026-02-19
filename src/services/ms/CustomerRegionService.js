import { CustomerRegion } from '../../models/Customer.js';
import StandardService from '../StandardService.js';

class CustomerRegionService extends StandardService {
  columnOrder = ['', 'customer_region_code', 'customer_region_name', 'isactive'];
  columnSearch = ['cretime', 'customer_region_code', 'customer_region_name'];

  constructor() {
    super(CustomerRegion);
  }
}

export default CustomerRegionService;

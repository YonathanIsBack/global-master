import { CustomerGroup } from '../../models/Customer.js';
import StandardService from '../StandardService.js';

class CustomerGroupService extends StandardService {
  columnOrder = ['', 'customer_group_code', 'customer_group_name', 'isactive'];
  columnSearch = ['cretime', 'customer_group_code', 'customer_group_name'];

  constructor() {
    super(CustomerGroup);
  }
}

export default CustomerGroupService;

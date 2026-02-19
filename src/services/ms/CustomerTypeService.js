import { CustomerType } from '../../models/Customer.js';
import StandardService from '../StandardService.js';

class CustomerTypeService extends StandardService {
  columnOrder = ['', 'customer_type_code', 'customer_type_name', 'posisi', 'isactive'];
  columnSearch = ['cretime', 'customer_type_code', 'customer_type_name', 'posisi'];

  constructor() {
    super(CustomerType);
  }
}

export default CustomerTypeService;

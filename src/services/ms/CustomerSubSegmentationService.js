import { CustomerSegmentation } from '../../models/Customer.js';
import StandardService from '../StandardService.js';

class CustomerSubSegmentationService extends StandardService {
  columnOrder = ['', 'customer_segmentation_code', 'customer_segmentation_name', 'isactive'];
  columnSearch = ['cretime', 'customer_segmentation_code', 'customer_segmentation_name'];

  constructor() {
    super(CustomerSegmentation);
  }
}

export default CustomerSubSegmentationService;

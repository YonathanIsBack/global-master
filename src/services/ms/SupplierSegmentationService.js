import { Supplier, SupplierSegmentation } from '../../models/Supplier.js';
import StandardService from '../StandardService.js';

class SupplierSegmentationService extends StandardService {
  columnOrder = ['', 'supplier_segmentation_name', 'supplier_segmentation_code', 'isactive'];
  columnSearch = ['cretime', 'supplier_segmentation_name', 'supplier_segmentation_code'];

  constructor() {
    super(SupplierSegmentation);
  }
}

export default SupplierSegmentationService;

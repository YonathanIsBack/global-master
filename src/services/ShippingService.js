import Shipping from '../models/Shipping.js';
import StandardService from './StandardService.js';

class ShippingService extends StandardService {
  columnOrder = ["", "shipping_name", "isactive"];
  columnSearch = ["cretime", "shipping_name"];

  constructor() {
    super(Shipping);
  }
}

export default ShippingService;

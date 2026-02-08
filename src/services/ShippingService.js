import Shipping from '../models/Shipping.js';
import StandardService from './StandardService.js';

class ShippingService extends StandardService {
  constructor() {
    super(Shipping);
  }
}

export default ShippingService;

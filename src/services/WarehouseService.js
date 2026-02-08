import { Warehouse } from '../models/Warehouse.js';
import StandardService from './StandardService.js';

class WarehouseService extends StandardService {
  constructor() {
    super(Warehouse);
  }
}

export default WarehouseService;

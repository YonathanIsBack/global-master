import Stratum from '../models/Stratum.js';
import StandardService from './StandardService.js';

class StratumService extends StandardService {
  constructor() {
    super(Stratum);
  }
}

export default StratumService;

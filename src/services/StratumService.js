import Stratum from '../models/Stratum.js';
import StandardService from './StandardService.js';

class StratumService extends StandardService {
  columnOrder = ["", "stratum_code", "stratum_name", "isactive"];
  columnSearch = ["cretime", "stratum_code", "stratum_name"];
  
  constructor() {
    super(Stratum);
  }
}

export default StratumService;

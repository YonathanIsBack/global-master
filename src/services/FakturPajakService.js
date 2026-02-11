import FakturPajak from '../models/FakturPajak.js';
import StandardService from './StandardService.js';

class FakturPajakService extends StandardService {
  columnOrder = ["", "prefix", "subfix", "from_number", "to_number", "number_now", "isactive"];
  columnSearch = ["prefix", "subfix", "from_number", "to_number"];

  constructor() {
    super(FakturPajak);
  }
}

export default FakturPajakService;

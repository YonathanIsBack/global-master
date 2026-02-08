import FakturPajak from '../models/FakturPajak.js';
import StandardService from './StandardService.js';

class FakturPajakService extends StandardService {
  constructor() {
    super(FakturPajak);
  }
}

export default FakturPajakService;

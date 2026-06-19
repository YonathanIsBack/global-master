import { CoretaxJenisPembeli } from '../../models/ms/Coretax.js';
import StandardService from '../StandardService.js';

class CoretaxJenisPembeliService extends StandardService {
  columnOrder = ['', 'coretax_jenis_pembeli_name', 'coretax_jenis_pembeli_info', 'isactive'];
  columnSearch = ['coretax_jenis_pembeli_name', 'coretax_jenis_pembeli_info'];

  constructor() {
    super(CoretaxJenisPembeli);
  }
}

export default CoretaxJenisPembeliService;

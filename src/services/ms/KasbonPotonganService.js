import StandardService from '../StandardService.js';

class KasbonPotonganService extends StandardService {
  columnOrder = ['', 'kasbon_potongan_name', 'total', 'isactive'];
  columnSearch = ['cretime', 'kasbon_potongan_name', 'total'];

  constructor(model) {
    super(model);
  }
}

export default KasbonPotonganService;

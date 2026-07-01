import StandardService from '../StandardService.js';

class MsCk6GolonganService extends StandardService {
  columnOrder = ['', 'golongan_name', 'from_abv', 'isactive'];
  columnSearch = ['cretime', 'golongan_name', 'from_abv'];

  constructor(model) {
    super(model);
  }
}

export default MsCk6GolonganService;

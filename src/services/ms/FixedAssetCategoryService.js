import StandardService from '../StandardService.js';

class FixedAssetCategoryService extends StandardService {
  columnOrder = ['', 'fixed_asset_category_name', 'isactive'];
  columnSearch = ['cretime', 'fixed_asset_category_name'];

  constructor(model) {
    super(model);
  }
}

export default FixedAssetCategoryService;

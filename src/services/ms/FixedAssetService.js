import { FixedAssetCategory, FixedAssetGroup } from '../../models/FixedAsset.js';
import Location from '../../models/Location.js';
import SequelizeUtil from '../../util/SequelizeUtil.js';
import StandardService from '../StandardService.js';

class FixedAssetService extends StandardService {
  columnOrder = [
    '',
    SequelizeUtil.getSequelizeCol('FixedAssetGroup.fixed_asset_group_name'),
    SequelizeUtil.getSequelizeCol('FixedAssetCategory.fixed_asset_category_name'),
    'fixed_asset_code',
    'fixed_asset_name',
    'isused',
    SequelizeUtil.getSequelizeCol('Location.location_name'),
    'qr_code',
    'user',
    'isnewpurchase',
    'acquisition_date',
    'acquisition_value',
    'quantity',
    'service_life',
    'salvage_value',
    'isactive'
  ];
  columnSearch = [
    'cretime',
    '$FixedAssetGroup.fixed_asset_group_name$',
    '$FixedAssetCategory.fixed_asset_category_name$',
    'fixed_asset_code',
    'fixed_asset_name',
    'isused',
    '$Location.location_name$',
    'qr_code',
    'user',
    'isnewpurchase',
    'acquisition_date',
    'acquisition_value',
    'quantity',
    'service_life',
    'salvage_value',
  ];

  constructor(model) {
    super(model);
  }

  async count({ whereClause } = {}) {
    return await this.model.count({
      where: whereClause ?? null,
      include: [
        {
          model: FixedAssetGroup,
          required: false
        },
        {
          model: FixedAssetCategory,
          required: false
        },
        {
          model: Location,
          required: false
        }
      ]
    });
  }

  async getAll(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection } = params;

    const results = await this.model.findAll({
      where: whereClause,
      raw: true,
      limit: Number(limit),
      offset: Number(offset),
      order: this.buildOrderClause(orderIndex, orderDirection),
      include: [
        {
          model: FixedAssetGroup,
          required: false
        },
        {
          model: FixedAssetCategory,
          required: false
        },
        {
          model: Location,
          required: false
        }
      ]
    });

    return results.map((result) => ({
      ...result,
      fixedAssetGroupName: result['FixedAssetGroup.fixedAssetGroupName'],
      fixedAssetCategoryName: result['FixedAssetCategory.fixedAssetCategoryName'],
      locationName: result['Location.locationName']
    }));
  }
}

export default FixedAssetService;

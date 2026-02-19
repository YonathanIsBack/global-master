import { FixedAssetCategory, FixedAssetGroup, FixedDepreciation } from '../../models/FixedAsset.js';
import Location from '../../models/Location.js';
import SequelizeUtil from '../../util/SequelizeUtil.js';
import StandardService from '../StandardService.js';

class FixedAssetGroupService extends StandardService {
  columnOrder = [
    '',
    'fixed_asset_group_code',
    'fixed_asset_group_name',
    SequelizeUtil.getSequelizeCol('FixedDepreciation.depreciation_name'),
    'depreciation_rate',
    'isactive'
  ];
  columnSearch = [
    'cretime',
    'fixed_asset_group_code',
    'fixed_asset_group_name',
    '$FixedDepreciation.depreciation_name$',
    'depreciation_rate'
  ];

  constructor(model) {
    super(model);
  }

  async count({ whereClause } = {}) {
    return await this.model.count({
      where: whereClause ?? null,
      include: [
        {
          model: FixedDepreciation,
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
          model: FixedDepreciation,
          required: false
        }
      ]
    });

    return results.map((result) => ({
      ...result,
      depreciationName: result['FixedDepreciation.depreciationName'],
    }));
  }
}

export default FixedAssetGroupService;

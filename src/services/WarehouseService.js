import { Warehouse, WarehouseLevel } from '../models/Warehouse.js';
import SequelizeUtil from '../util/SequelizeUtil.js';
import StandardService from './StandardService.js';

class WarehouseService extends StandardService {
  columnOrder = [
    '',
    'warehouse_code',
    SequelizeUtil.getSequelizeCol('WarehouseLevel.warehouse_level_name'),
    'warehouse_name',
    'warehouse_initial',
    'warehouse_addr',
    'warehouse_postal_code',
    'warehouse_phone',
    'note',
    'isactive'
  ];
  columnSearch = [
    'cretime',
    '$WarehouseLevel.warehouse_level_name$',
    'warehouse_code',
    'warehouse_name',
    'warehouse_initial',
    'warehouse_addr',
    'warehouse_postal_code',
    'warehouse_phone',
    'note'
  ];

  constructor() {
    super(Warehouse);
  }

  async count({ whereClause } = {}) {
    return await this.model.count({
      where: whereClause ?? null,
      include: [
        {
          model: WarehouseLevel,
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
          model: WarehouseLevel,
          required: false
        }
      ]
    });

    return results.map((result) => ({
      ...result,
      warehouseLevelName: result['WarehouseLevel.warehouseLevelName']
    }));
  }
}

export default WarehouseService;

import { DataTypes } from 'sequelize';
import StandardModel from '../../StandardModel.js';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class InventoryAdjustment extends StandardModel { }
class InventoryAdjustmentDt extends StandardModel { }
class InventoryAdjustmentHpp extends StandardModel { }
class InventoryAdjustmentHppDt extends StandardModel { }
class InventoryAdjustmentHppItemDt extends StandardModel { }
class InventoryAdjustmentItemDt extends StandardModel { }
class InventoryAdjustmentReject extends StandardModel { }
class InventoryAdjustmentRequest extends StandardModel { }

InventoryAdjustment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryAdjustmentId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      inventoryAdjustmentNo: DataTypes.STRING(50),
      inventoryAdjustmentNoTemp: DataTypes.STRING(50),
      warehouseId: DataTypes.INTEGER,
      currencyId: DataTypes.BIGINT,
      currencyRate: DataTypes.DOUBLE,
      // bc16Id: { type: DataTypes.STRING(150), field: 'bc_16_id' },
      bc16Code: { type: DataTypes.STRING(150), field: 'bc_16_code' },
      // bcStatus: DataTypes.STRING(50),
      inventoryAdjustmentDate: DataTypes.DATE,
      refference: DataTypes.STRING(25),
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      subtotal: DataTypes.DOUBLE,
      totalcost: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalKurang: DataTypes.DOUBLE,
      type: DataTypes.TINYINT,
      isedit: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true, withDbId: true }
  ),

  StandardModel.buildStandardModelInformation(
    'tr_inventory_adjustment',
    'InventoryAdjustment',
    sequelize
  )
);

InventoryAdjustmentDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryAdjustmentDtId', DataTypes.BIGINT),
      inventoryAdjustmentId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      size: DataTypes.STRING(10),
      itemPack: DataTypes.STRING(10),
      country: DataTypes.STRING(25),
      vintage: DataTypes.STRING(25),
      currencyId: DataTypes.BIGINT,
      currencyRate: DataTypes.DOUBLE,
      bc16Id: { type: DataTypes.BIGINT, field: 'bc_16_id' },
      bc16Code: { type: DataTypes.STRING(50), field: 'bc_16_code' },
      bcStatus: DataTypes.STRING(50),
      qty: DataTypes.FLOAT,
      qtyBc: DataTypes.DOUBLE,
      buyPrice: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      coaId: DataTypes.INTEGER,
      status: DataTypes.ENUM(['New', 'Process', 'Finished', 'Cancelled']),
      type: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),

  StandardModel.buildStandardModelInformation(
    'tr_inventory_adjustment_dt',
    'InventoryAdjustmentDt',
    sequelize
  )
);

InventoryAdjustmentHpp.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryAdjustmentHppId', DataTypes.BIGINT),
      inventoryAdjustmentHppNo: DataTypes.STRING(25),
      inventoryAdjustmentHppDate: DataTypes.DATE,
      warehouseId: DataTypes.INTEGER,
      refference: DataTypes.STRING(25),
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      subtotal: DataTypes.DOUBLE,
      subtotalT: DataTypes.DOUBLE,
      totalcost: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalKurang: DataTypes.DOUBLE,
      type: DataTypes.TINYINT,
      isImport: DataTypes.TINYINT,
      isedit: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),

  StandardModel.buildStandardModelInformation(
    'tr_inventory_adjustment_hpp',
    'InventoryAdjustmentHpp',
    sequelize
  )
);

InventoryAdjustmentHppDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryAdjustmentHppDtId', DataTypes.BIGINT),
      inventoryAdjustmentHppId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      qty: DataTypes.FLOAT,
      buyPrice: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      priceAvgT: DataTypes.DOUBLE,
      priceT: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      coaId: DataTypes.INTEGER,
      type: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),

  StandardModel.buildStandardModelInformation(
    'tr_inventory_adjustment_hpp_dt',
    'InventoryAdjustmentHppDt',
    sequelize
  )
);

InventoryAdjustmentHppItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryAdjustmentItemHppDtId', DataTypes.BIGINT),
      inventoryAdjustmentHppDtId: DataTypes.BIGINT,
      inventoryAdjustmentHppId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),

  StandardModel.buildStandardModelInformation(
    'tr_inventory_adjustment_hpp_item_dt',
    'InventoryAdjustmentHppItemDt',
    sequelize
  )
);

InventoryAdjustmentItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryAdjustmentItemDtId', DataTypes.BIGINT),
      inventoryAdjustmentDtId: DataTypes.BIGINT,
      inventoryAdjustmentId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      bc16DtId: { type: DataTypes.BIGINT, field: 'bc_16_dt_id' },
      itemPack: DataTypes.DOUBLE,
      itemId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),

  StandardModel.buildStandardModelInformation(
    'tr_inventory_adjustment_item_dt',
    'InventoryAdjustmentItemDt',
    sequelize
  )
);

InventoryAdjustmentReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryAdjustmentRejectId', DataTypes.BIGINT),
      inventoryAdjustmentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_inventory_adjustment_reject',
    'InventoryAdjustmentReject',
    sequelize
  )
);

InventoryAdjustmentRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryAdjustmentRequestId', DataTypes.BIGINT),
      inventoryAdjustmentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_inventory_adjustment_request',
    'InventoryAdjustmentRequest',
    sequelize
  )
);

export {
  InventoryAdjustment,
  InventoryAdjustmentDt,
  InventoryAdjustmentHpp,
  InventoryAdjustmentHppDt,
  InventoryAdjustmentHppItemDt,
  InventoryAdjustmentReject,
  InventoryAdjustmentRequest
};

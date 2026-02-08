import { DataTypes } from 'sequelize';
import StandardModel from '../../StandardModel.js';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class InventoryTransfer extends StandardModel { }
class InventoryTransferDt extends StandardModel { }
class InventoryTransferItemDt extends StandardModel { }

InventoryTransfer.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryTransferId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      inventoryTransferNo: DataTypes.STRING(50),
      inventoryTransferNoTemp: DataTypes.STRING(50),
      warehouseIdFrom: DataTypes.INTEGER,
      warehouseIdTo: DataTypes.INTEGER,
      inventoryTransferDate: DataTypes.DATE,
      bc27Code: { type: DataTypes.STRING(50), field: 'bc_27_code' },
      refference: DataTypes.STRING(150),
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isedit: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true, withDbId: true }
  ),

  StandardModel.buildStandardModelInformation(
    'tr_inventory_transfer',
    'InventoryTransfer',
    sequelize
  )
);

InventoryTransferDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryTransferDtId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      inventoryTransferId: DataTypes.INTEGER,
      currencyId: DataTypes.BIGINT,
      currencyRate: DataTypes.DOUBLE,
      bc16Code: { type: DataTypes.STRING(150), field: 'bc_16_code' },
      bcStatus: DataTypes.STRING(50),
      bc16Id: { type: DataTypes.BIGINT, field: 'bc_16_id' },
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      stockQty: DataTypes.FLOAT,
      qty: DataTypes.DOUBLE,
      qtyBc: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true, withDbId: true }
  ),

  StandardModel.buildStandardModelInformation(
    'tr_inventory_transfer_dt',
    'InventoryTransferDt',
    sequelize
  )
);

InventoryTransferItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryTransferItemDtId', DataTypes.BIGINT),
      inventoryTransferDtId: DataTypes.BIGINT,
      inventoryTransferId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      bc16DtId: { type: DataTypes.BIGINT, field: 'bc_16_dt_id' },
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE
    },
    {}
  ),

  StandardModel.buildStandardModelInformation(
    'tr_inventory_transfer_item_dt',
    'InventoryTransferItemDt',
    sequelize
  )
);

export { InventoryTransfer, InventoryTransferDt, InventoryTransferItemDt };

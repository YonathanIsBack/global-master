import { DataTypes } from 'sequelize';
import StandardModel from '../../StandardModel.js';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class InventoryStockOpname extends StandardModel {}
class InventoryStockOpnameDt extends StandardModel {}
class InventoryStockOpnameItemDt extends StandardModel {}

InventoryStockOpname.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryStockOpnameId', DataTypes.BIGINT),
      inventoryStockOpnameCode: DataTypes.STRING(50),
      inventoryStockOpnameCodeTemp: DataTypes.STRING(50),
      warehouseId: DataTypes.INTEGER,
      inventoryStockOpnameDate: DataTypes.DATE,
      note: DataTypes.TEXT,
      noteOpname: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isedit: DataTypes.TINYINT,
      type: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      opnameTime: DataTypes.DATE,
      opnameBy: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),

  StandardModel.buildStandardModelInformation(
    'tr_inventory_stock_opname',
    'InventoryStockOpname',
    sequelize
  )
);

InventoryStockOpnameDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryStockOpnameDtId', DataTypes.BIGINT),
      inventoryStockOpnameId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      qty: DataTypes.FLOAT,
      qtyOpname: DataTypes.FLOAT,
      ischeck: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),

  StandardModel.buildStandardModelInformation(
    'tr_inventory_stock_opname_dt',
    'InventoryStockOpnameDt',
    sequelize
  )
);

InventoryStockOpnameItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockOpnameItemDtId', DataTypes.BIGINT),
      stockOpnameDtId: DataTypes.BIGINT,
      stockOpnameId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.FLOAT
    },
    {}
  ),

  StandardModel.buildStandardModelInformation(
    'tr_inventory_stock_opname_item_dt',
    'InventoryStockOpnameItemDt',
    sequelize
  )
);

export { InventoryStockOpname, InventoryStockOpnameDt, InventoryStockOpnameItemDt };

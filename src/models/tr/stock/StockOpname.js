import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class StockOpname extends StandardModel {}
class StockOpnameDt extends StandardModel {}
class StockOpnameItemDt extends StandardModel {}

StockOpname.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('inventoryStockOpnameId', DataTypes.BIGINT),
      inventoryStockOpnameCode: DataTypes.STRING(50),
      inventoryStockOpnameCodeTemp: DataTypes.STRING(50),
      warehouseId: DataTypes.INTEGER,
      inventoryStockOpnameDate: DataTypes.DATEONLY,
      note: DataTypes.TEXT,
      noteOpname: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isedit: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      opnametime: DataTypes.DATE,
      opnameby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_inventory_stock_opname', 'StockOpname', sequelize)
);

StockOpnameDt.init(
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
  StandardModel.buildStandardModelInformation('tr_inventory_stock_opname_dt', 'StockOpnameDt', sequelize)
);

StockOpnameItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stocpOpnameItemDtId', DataTypes.BIGINT),
      stockOpnameDtId: DataTypes.BIGINT,
      stockOpnameId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_inventory_stock_opname_item_dt', 'StockOpnameItemDt', sequelize)
);

export { StockOpname, StockOpnameDt, StockOpnameItemDt };

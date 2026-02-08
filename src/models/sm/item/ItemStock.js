import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ItemStock extends StandardModel { }
class ItemStockDt extends StandardModel { }

ItemStock.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemStockId', DataTypes.BIGINT),
      whId: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      qty: DataTypes.DOUBLE,
      qtyPendingIn: DataTypes.DOUBLE,
      qtyPendingInImport: DataTypes.DOUBLE,
      qtyPendingOut: DataTypes.DOUBLE,
      qtyPendingOutExport: DataTypes.DOUBLE,
      qtyPending: DataTypes.DOUBLE,
      qtyPendingReceive: DataTypes.DOUBLE,
      qtyPendingReceiveImport: DataTypes.DOUBLE,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('sm_item_stock', 'ItemStock', sequelize)
);

ItemStockDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemStockDtId', DataTypes.BIGINT),
      itemStockId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      whId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyPendingIn: DataTypes.DOUBLE,
      qtyPendingInImport: DataTypes.DOUBLE,
      qtyPendingOut: DataTypes.DOUBLE,
      qtyPendingOutExport: DataTypes.DOUBLE,
      qtyPending: DataTypes.DOUBLE,
      qtyPendingReceive: DataTypes.DOUBLE,
      qtyPendingReceiveImport: DataTypes.DOUBLE,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('sm_item_stock_dt', 'ItemStockDt', sequelize)
);

export { ItemStock, ItemStockDt };


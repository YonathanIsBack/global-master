import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class TrSafetyStock extends StandardModel {}

TrSafetyStock.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('safetyStockId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      qty: DataTypes.FLOAT
    },
    { withIsdel: true, withCreate: true, withModify: true, withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('tr_safety_stock', 'TrSafetyStock', sequelize)
);

export default TrSafetyStock;

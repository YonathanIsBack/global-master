import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";
const sequelize = DatabaseConnectionSingleton.getConnection();

class TrcOffshoreSales extends StandardModel { }

TrcOffshoreSales.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('trcId', DataTypes.BIGINT),
      logTransaksiId: DataTypes.BIGINT,
      id: DataTypes.BIGINT,
      transactionCode: DataTypes.STRING(50),
      transactionDate: DataTypes.DATEONLY,
      transactionType: DataTypes.INTEGER,
      transactionStatusAfter: DataTypes.BIGINT,
      transactionStatusBefore: DataTypes.BIGINT,
      traceId: DataTypes.STRING(150),
      page: DataTypes.STRING(500),
      status: DataTypes.INTEGER,
      ip: DataTypes.STRING(50),
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('trc_offshore_sales', 'TrcOffshorePurchase', sequelize)
);

export default TrcOffshoreSales;
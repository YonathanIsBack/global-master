import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class ArTr extends StandardModel { }

ArTr.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('arTrId', DataTypes.BIGINT),
      customerId: DataTypes.BIGINT,
      transactionId: DataTypes.DOUBLE,
      transactionCode: DataTypes.STRING(100),
      transactionDate: DataTypes.DATE,
      dueDate: DataTypes.DATE,
      transactionType: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
      currencyId: DataTypes.INTEGER,
      rate: DataTypes.DOUBLE,
      rateGap: DataTypes.DOUBLE,
      kurang: DataTypes.DOUBLE,
      tambah: DataTypes.DOUBLE,
      startBalance: DataTypes.DOUBLE,
      balance: DataTypes.DOUBLE,
      note: DataTypes.TEXT,
      cretime: DataTypes.DATE,
      creby: DataTypes.BIGINT,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('sm_ar_tr', 'ArTr', sequelize)
);

export default ArTr;

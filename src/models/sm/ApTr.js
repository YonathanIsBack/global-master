import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class ApTr extends StandardModel { }

ApTr.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('apTrId', DataTypes.BIGINT),
      supplierId: DataTypes.BIGINT,
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
  StandardModel.buildStandardModelInformation('sm_ap_tr', 'ApTr', sequelize)
);

export default ApTr;

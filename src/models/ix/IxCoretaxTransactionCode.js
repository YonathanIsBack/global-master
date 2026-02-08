import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoretaxTransactionCode extends StandardModel { }
class IxCoretaxTransactionCodeDt extends StandardModel { }

IxCoretaxTransactionCode.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxTransactionCodeId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_transaction_code', 'IxCoretaxTransactionCode', sequelize)
);

IxCoretaxTransactionCodeDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxTransactionCodeDtId', DataTypes.BIGINT),
      ixCoretaxTransactionCodeId: DataTypes.BIGINT,
      coretaxTransactionCodeId: DataTypes.BIGINT,
      coretaxTransactionCode: DataTypes.STRING(50),
      coretaxTransactionNumber: DataTypes.STRING(50),
      coretaxTransactionDesc: DataTypes.TEXT,
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_transaction_code_dt', 'IxCoretaxTransactionCodeDt', sequelize)
);

export {
  IxCoretaxTransactionCode,
  IxCoretaxTransactionCodeDt
};


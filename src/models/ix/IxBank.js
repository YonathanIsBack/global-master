import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxBank extends StandardModel { }
class IxBankDt extends StandardModel { }

IxBank.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBankId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_bank', 'IxBank', sequelize)
);

IxBankDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBankDtId', DataTypes.BIGINT),
      ixBankId: DataTypes.BIGINT,
      bankCode: DataTypes.STRING(50),
      bankName: DataTypes.STRING(50),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_bank_dt', 'IxBankDt', sequelize)
);

export {
  IxBank,
  IxBankDt
};


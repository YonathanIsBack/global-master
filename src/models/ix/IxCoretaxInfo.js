import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoretaxInfo extends StandardModel { }
class IxCoretaxInfoDt extends StandardModel { }

IxCoretaxInfo.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxInfoId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_info', 'IxCoretaxInfo', sequelize)
);

IxCoretaxInfoDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxInfoDtId', DataTypes.BIGINT),
      ixCoretaxInfoId: DataTypes.BIGINT,
      coretaxInfoId: DataTypes.BIGINT,
      coretaxTransactionCodeId: DataTypes.BIGINT,
      coretaxInfoCode: DataTypes.STRING(50),
      coretaxInfoNumber: DataTypes.STRING(50),
      coretaxInfoDesc: DataTypes.TEXT,
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_info_dt', 'IxCoretaxInfoDt', sequelize)
);

export {
  IxCoretaxInfo,
  IxCoretaxInfoDt
};


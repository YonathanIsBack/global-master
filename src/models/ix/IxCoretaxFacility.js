import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoretaxFacility extends StandardModel { }
class IxCoretaxFacilityDt extends StandardModel { }

IxCoretaxFacility.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxFacilityId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_facility', 'IxCoretaxFacility', sequelize)
);

IxCoretaxFacilityDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxFacilityDtId', DataTypes.BIGINT),
      ixCoretaxFacilityId: DataTypes.BIGINT,
      coretaxFacilityId: DataTypes.BIGINT,
      coretaxTransactionCodeId: DataTypes.BIGINT,
      coretaxFacilityCode: DataTypes.STRING(50),
      coretaxFacilityNumber: DataTypes.STRING(50),
      coretaxFacilityDesc: DataTypes.TEXT,
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_facility_dt', 'IxCoretaxFacilityDt', sequelize)
);

export {
  IxCoretaxFacility,
  IxCoretaxFacilityDt
};


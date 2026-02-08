import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoretaxType extends StandardModel { }
class IxCoretaxTypeDt extends StandardModel { }

IxCoretaxType.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxTypeId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_type', 'IxCoretaxType', sequelize)
);

IxCoretaxTypeDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxTypeDtId', DataTypes.BIGINT),
      ixCoretaxTypeId: DataTypes.BIGINT,
      coretaxTypeId: DataTypes.BIGINT,
      coretaxTypeCode: DataTypes.STRING(50),
      coretaxTypeName: DataTypes.STRING(150),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_type_dt', 'IxCoretaxTypeDt', sequelize)
);

export {
  IxCoretaxType,
  IxCoretaxTypeDt
};


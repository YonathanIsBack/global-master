import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoaGroup extends StandardModel { }
class IxCoaGroupDt extends StandardModel { }

IxCoaGroup.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoaGroupId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coa_group', 'IxCoaGroup', sequelize)
);

IxCoaGroupDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoaGroupDtId', DataTypes.BIGINT),
      ixCoaGroupId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(150),
      coaName: DataTypes.STRING(150),
      coaParentId: DataTypes.BIGINT,
      coaTypeCode: DataTypes.STRING(150),
      coaTypeName: DataTypes.STRING(150),
      level: DataTypes.STRING(150),
      isactive: DataTypes.STRING(150),
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_coa_group_dt', 'IxCoaGroupDt', sequelize)
);

export {
  IxCoaGroup,
  IxCoaGroupDt
};


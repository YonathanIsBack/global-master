import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoaSubgroup extends StandardModel { }
class IxCoaSubgroupDt extends StandardModel { }

IxCoaSubgroup.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoaSubgroupId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coa_subgroup', 'IxCoaSubgroup', sequelize)
);

IxCoaSubgroupDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoaSubgroupDtId', DataTypes.BIGINT),
      ixCoaSubgroupId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(150),
      coaName: DataTypes.STRING(150),
      coaParentId: DataTypes.BIGINT,
      coaTypeCode: DataTypes.STRING(150),
      coaTypeName: DataTypes.STRING(150),
      coaGroupCode: DataTypes.STRING(150),
      coaGroupName: DataTypes.STRING(150),
      level: DataTypes.STRING(150),
      isbank: DataTypes.STRING(150),
      isactive: DataTypes.STRING(150),
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_coa_subgroup_dt', 'IxCoaSubgroupDt', sequelize)
);

export {
  IxCoaSubgroup,
  IxCoaSubgroupDt
};


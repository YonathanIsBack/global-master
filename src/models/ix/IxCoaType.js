import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoaType extends StandardModel { }
class IxCoaTypeDt extends StandardModel { }

IxCoaType.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoaTypeId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coa_type', 'IxCoaType', sequelize)
);

IxCoaTypeDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoaTypeDtId', DataTypes.BIGINT),
      ixCoaTypeId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(150),
      coaName: DataTypes.STRING(150),
      coaParentId: DataTypes.BIGINT,
      level: DataTypes.STRING(150),
      reportType: DataTypes.STRING(150),
      normalBalance: DataTypes.STRING(150),
      isactiva: DataTypes.STRING(150),
      isactive: DataTypes.STRING(150),
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_coa_type_dt', 'IxCoaTypeDt', sequelize)
);

export {
  IxCoaType,
  IxCoaTypeDt
};


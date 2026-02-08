import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoaSubledger extends StandardModel { }
class IxCoaSubledgerDt extends StandardModel { }

IxCoaSubledger.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoaSubledgerId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coa_subledger', 'IxCoaSubledger', sequelize)
);

IxCoaSubledgerDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoaSubledgerDtId', DataTypes.BIGINT),
      ixCoaSubledgerId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(150),
      coaName: DataTypes.STRING(150),
      coaParentId: DataTypes.BIGINT,
      coaTypeCode: DataTypes.STRING(150),
      coaTypeName: DataTypes.STRING(150),
      coaGroupCode: DataTypes.STRING(150),
      coaGroupName: DataTypes.STRING(150),
      coaSubgroupCode: DataTypes.STRING(150),
      coaSubgroupName: DataTypes.STRING(150),
      coaListCode: DataTypes.STRING(150),
      coaListName: DataTypes.STRING(150),
      level: DataTypes.STRING(150),
      isactive: DataTypes.STRING(150),
      isunder: DataTypes.STRING(150),
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_coa_subledger_dt', 'IxCoaSubledgerDt', sequelize)
);

export {
  IxCoaSubledger,
  IxCoaSubledgerDt
};


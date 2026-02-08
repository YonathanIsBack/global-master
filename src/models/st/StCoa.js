import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";
const sequelize = DatabaseConnectionSingleton.getConnection();

class StCoa extends StandardModel { }
class StCoaDt extends StandardModel { }

StCoa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stCoaId', DataTypes.BIGINT),
      stCoaName: DataTypes.STRING(150)
    },
    { withIsactive: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('st_coa', 'StCoa', sequelize)
);

StCoaDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stCoaDtId', DataTypes.BIGINT),
      stCoaId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      isdefault: DataTypes.TINYINT,
      isap: DataTypes.TINYINT,
      isar: DataTypes.TINYINT,
      type: DataTypes.STRING(50)
    },
    { withIsactive: true, withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('st_coa_dt', 'StCoaDt', sequelize)
);

export { StCoa, StCoaDt };
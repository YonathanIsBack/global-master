import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxStratum extends StandardModel { }
class IxStratumDt extends StandardModel { }

IxStratum.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixStratumId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_stratum', 'IxStratum', sequelize)
);

IxStratumDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixStratumDtId', DataTypes.BIGINT),
      ixStratumId: DataTypes.BIGINT,
      stratumCode: DataTypes.STRING(50),
      stratumName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_stratum_dt', 'IxStratumDt', sequelize)
);

export {
  IxStratum,
  IxStratumDt
};


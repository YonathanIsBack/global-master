import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxUserTurunan extends StandardModel { }
class IxUserTurunanDt extends StandardModel { }

IxUserTurunan.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixUserTurunanId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_user_turunan', 'IxUserTurunan', sequelize)
);

IxUserTurunanDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixUserTurunanDtId', DataTypes.BIGINT),
      ixUserTurunanId: DataTypes.BIGINT,
      username: DataTypes.STRING(150),
      usernameDerivation: DataTypes.STRING(150),
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_user_turunan_dt', 'IxUserTurunanDt', sequelize)
);

export {
  IxUserTurunan,
  IxUserTurunanDt
};


import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxPrincipal extends StandardModel { }
class IxPrincipalDt extends StandardModel { }

IxPrincipal.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixPrincipalId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_principal', 'IxPrincipal', sequelize)
);

IxPrincipalDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixPrincipalDtId', DataTypes.BIGINT),
      ixPrincipalId: DataTypes.BIGINT,
      principalCode: DataTypes.STRING(50),
      principalName: DataTypes.STRING(150),
      // labelNotes: DataTypes.STRING(500),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_principal_dt', 'IxPrincipalDt', sequelize)
);

export {
  IxPrincipal,
  IxPrincipalDt
};


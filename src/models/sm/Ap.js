import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class Ap extends StandardModel { }

Ap.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('apId', DataTypes.BIGINT),
      supplierId: DataTypes.BIGINT,
      totalAp: DataTypes.DOUBLE,
      currencyId: DataTypes.INTEGER,
      rate: DataTypes.DOUBLE,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('sm_ap', 'Ap', sequelize)
);

export default Ap;

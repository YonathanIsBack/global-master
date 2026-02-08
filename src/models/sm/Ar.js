import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class Ar extends StandardModel { }

Ar.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('arId', DataTypes.BIGINT),
      customerId: DataTypes.BIGINT,
      totalAr: DataTypes.DOUBLE,
      currencyId: DataTypes.INTEGER,
      rate: DataTypes.DOUBLE,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('sm_ar', 'Ar', sequelize)
);

export default Ar;

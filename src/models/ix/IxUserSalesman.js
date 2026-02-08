import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxUserSalesman extends StandardModel { }
class IxUserSalesmanDt extends StandardModel { }

IxUserSalesman.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixUserSalesmanId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_user_salesman', 'IxUserSalesman', sequelize)
);

IxUserSalesmanDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixUserSalesmanDtId', DataTypes.BIGINT),
      ixUserSalesmanId: DataTypes.BIGINT,
      username: DataTypes.STRING(150),
      salesmanCode: DataTypes.STRING(150),
      salesmanName: DataTypes.STRING(150),
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_user_salesman_dt', 'IxUserSalesman', sequelize)
);

export {
  IxUserSalesman,
  IxUserSalesmanDt
};


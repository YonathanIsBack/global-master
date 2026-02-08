import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxSalesman extends StandardModel { }
class IxSalesmanDt extends StandardModel { }

IxSalesman.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSalesmanId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_salesman', 'IxSalesman', sequelize)
);

IxSalesmanDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSalesmanDtId', DataTypes.BIGINT),
      ixSalesmanId: DataTypes.BIGINT,
      salesmanCode: DataTypes.STRING(50),
      salesmanName: DataTypes.STRING(150),
      iscommision: DataTypes.STRING(50),
      dob: DataTypes.STRING(50),
      locationId: DataTypes.BIGINT,
      locationCode: DataTypes.STRING(50),
      locationName: DataTypes.STRING(150),
      stratumId: DataTypes.BIGINT,
      startumCode: DataTypes.STRING(50),
      stratumName: DataTypes.STRING(150),
      salesmanEmail: DataTypes.STRING(50),
      salesmanPhone: DataTypes.STRING(50),
      userId: DataTypes.BIGINT,
      userCode: DataTypes.STRING(50),
      username: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.BIGINT,
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_salesman_dt', 'IxSalesmanDt', sequelize)
);

export {
  IxSalesman,
  IxSalesmanDt
};


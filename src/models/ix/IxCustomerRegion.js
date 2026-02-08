import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCustomerRegion extends StandardModel { }
class IxCustomerRegionDt extends StandardModel { }

IxCustomerRegion.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerRegionId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_region', 'IxCustomerRegion', sequelize)
);

IxCustomerRegionDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerRegionDtId', DataTypes.BIGINT),
      ixCustomerRegionId: DataTypes.BIGINT,
      customerRegionCode: DataTypes.STRING(50),
      customerRegionName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_region_dt', 'IxCustomerRegionDt', sequelize)
);

export {
  IxCustomerRegion,
  IxCustomerRegionDt
};


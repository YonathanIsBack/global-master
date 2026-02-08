import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCustomerType extends StandardModel { }
class IxCustomerTypeDt extends StandardModel { }

IxCustomerType.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerTypeId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_type', 'IxCustomerType', sequelize)
);

IxCustomerTypeDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerTypeDtId', DataTypes.BIGINT),
      ixCustomerTypeId: DataTypes.BIGINT,
      customerTypeCode: DataTypes.STRING(50),
      customerTypeName: DataTypes.STRING(150),
      posisi: DataTypes.STRING(50),
      isdefault: DataTypes.STRING(50),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_type_dt', 'IxCustomerTypeDt', sequelize)
);

export {
  IxCustomerType,
  IxCustomerTypeDt
};


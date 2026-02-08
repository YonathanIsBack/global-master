import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class TrSalesmanTarget extends StandardModel {}
class TrSalesmanTargetDt extends StandardModel {}

TrSalesmanTarget.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesmanTargetId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      salesmanId: DataTypes.INTEGER,
      targetType: DataTypes.TINYINT,
      targetName: DataTypes.STRING(100),
      unit: DataTypes.TINYINT
    },
    { withIsdel: true, withCreate: true, withModify: true, withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('tr_salesman_target', 'TrSalesmanTarget', sequelize)
);

TrSalesmanTargetDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesmanTargetDtId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      salesmanTargetId: DataTypes.BIGINT,
      targetType: DataTypes.INTEGER,
      salesTargetNameId: DataTypes.BIGINT,
      salesTargetValue: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true, withDbId: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_salesman_target_dt',
    'TrSalesmanTargetDt',
    sequelize
  )
);

export { TrSalesmanTarget, TrSalesmanTargetDt };


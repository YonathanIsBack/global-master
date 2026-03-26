import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class TrSalesTarget extends StandardModel {}
class TrSalesTargetDt extends StandardModel {}

TrSalesTarget.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesTargetId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      targetType: DataTypes.TINYINT,
      targetName: DataTypes.STRING(100),
      unit: DataTypes.TINYINT
    },
    { withIsdel: true, withCreate: true, withModify: true, withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_target', 'TrSalesTarget', sequelize)
);

TrSalesTargetDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesTargetDtId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      salesTargetId: DataTypes.BIGINT,
      targetType: DataTypes.INTEGER,
      salesTargetNameId: DataTypes.BIGINT,
      salesTargetValue: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true, withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_target_dt', 'TrSalesTargetDt', sequelize)
);

TrSalesTarget.hasMany(TrSalesTargetDt, { foreignKey: 'salesTargetId' });

export { TrSalesTarget, TrSalesTargetDt };

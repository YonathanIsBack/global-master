import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class TrPurchaseTarget extends StandardModel {}
class TrPurchaseTargetDt extends StandardModel {}

TrPurchaseTarget.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseTargetId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      targetType: DataTypes.TINYINT,
      targetName: DataTypes.STRING(100),
      unit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true, withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('tr_purchase_target', 'TrPurchaseTarget', sequelize)
);

TrPurchaseTargetDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseTargetDtId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      purchaseTargetId: DataTypes.BIGINT,
      targetType: DataTypes.INTEGER,
      purchaseTargetNameId: DataTypes.BIGINT,
      purchaseTargetValue: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true, withDbId: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_target_dt',
    'TrPurchaseTargetDt',
    sequelize
  )
);

export { TrPurchaseTarget, TrPurchaseTargetDt };

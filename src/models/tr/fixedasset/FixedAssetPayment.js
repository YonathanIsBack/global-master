import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class FixedAssetPayment extends StandardModel {}
class FixedAssetPaymentDt extends StandardModel {}

FixedAssetPayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetPaymentId', DataTypes.BIGINT),
      fixedAssetPaymentCode: DataTypes.STRING(50),
      fixedAssetPaymentCodeTemp: DataTypes.STRING(50),
      fixedAssetPaymentDate: DataTypes.DATE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      totalPurchase: DataTypes.DOUBLE,
      totalPayment: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      coaId: DataTypes.BIGINT,
      methodPayment: DataTypes.INTEGER,
      peymentNo: DataTypes.STRING(50),
      paymentDate: DataTypes.DATE,
      paymentClearDate: DataTypes.DATE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      unconfirmtime: DataTypes.DATE,
      unconfirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_fixed_asset_payment', 'FixedAssetPayment', sequelize)
);

FixedAssetPaymentDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetPaymentDtId', DataTypes.BIGINT),
      fixedAssetPaymentId: DataTypes.BIGINT,
      fixedAssetPurchaseId: DataTypes.BIGINT,
      fixedAssetPurchaseCode: DataTypes.STRING(25),
      supplier: DataTypes.STRING(500),
      total: DataTypes.DOUBLE,
      totalPayment: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_fixed_asset_payment_dt', 'FixedAssetPaymentDt', sequelize)
);

export { FixedAssetPayment, FixedAssetPaymentDt };

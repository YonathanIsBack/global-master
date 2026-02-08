import { DataTypes } from 'sequelize';
import StandardModel from '../../StandardModel.js';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class FixedAssetPurchase extends StandardModel {}
class FixedAssetPurchaseDt extends StandardModel {}

FixedAssetPurchase.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetPurchaseId', DataTypes.BIGINT),
      fixedAssetCode: DataTypes.STRING(50),
      fixedAssetCodeTemp: DataTypes.STRING(50),
      fixedAssetDate: DataTypes.DATE,
      supplier: DataTypes.STRING(500),
      biayaLainLain: DataTypes.DOUBLE,
      departmentId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      totalDisc: DataTypes.DOUBLE,
      taxPersen: DataTypes.DOUBLE,
      totalTax: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      unconfirmtime: DataTypes.DATE,
      unconfirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_fixed_asset_purchase', 'FixedAssetPurchase', sequelize)
);

FixedAssetPurchaseDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetPurchaseDtId', DataTypes.BIGINT),
      fixedAssetPurchaseId: DataTypes.BIGINT,
      itemName: DataTypes.STRING(500),
      fixedAssetGroupId: DataTypes.BIGINT,
      depreciationRate: DataTypes.DOUBLE,
      fixedAssetCategoryId: DataTypes.BIGINT,
      locationId: DataTypes.BIGINT,
      user: DataTypes.STRING(50),
      isnew: DataTypes.TINYINT,
      acquisitionDate: DataTypes.DATE,
      acquisitionValue: DataTypes.STRING(25),
      qty: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      discPersen: DataTypes.DOUBLE,
      discAmount: DataTypes.DOUBLE,
      ppn: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      serviceLife: DataTypes.INTEGER,
      salvageValue: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_fixed_asset_purchase_dt', 'FixedAssetPurchaseDt', sequelize)
);

export { FixedAssetPurchase, FixedAssetPurchaseDt };

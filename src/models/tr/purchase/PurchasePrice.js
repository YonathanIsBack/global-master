import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class PurchasePrice extends StandardModel {}
class PurchasePriceDt extends StandardModel {}
class PurchasePriceImport extends StandardModel {}
class PurchasePriceImportDt extends StandardModel {}

PurchasePrice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePriceId', DataTypes.BIGINT),
      traceId: DataTypes.STRING(150),
      companyParentId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      name: DataTypes.STRING(50),
      publishTime: DataTypes.DATEONLY,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT
    },
    { withIsdel: true, withCreate: true, withModify: true, withDbId: true, withIsactive: true }
  ),
  StandardModel.buildStandardModelInformation('tr_purchase_price', 'PurchasePrice', sequelize)
);

PurchasePriceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePriceDtId', DataTypes.BIGINT),
      purchasePriceId: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      price: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_price_dt',
    'PurchaseCreditNoteDt',
    sequelize
  )
);

PurchasePriceImport.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePriceImportId', DataTypes.BIGINT),
      name: DataTypes.STRING(50),
      publishTime: DataTypes.DATEONLY,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT
    },
    { withIsdel: true, withCreate: true, withModify: true, withIsactive: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_price_import',
    'PurchasePriceImport',
    sequelize
  )
);

PurchasePriceImportDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePriceImportDtId', DataTypes.BIGINT),
      purchasePriceImportId: DataTypes.STRING(50),
      currencyId: DataTypes.DATE,
      currencyCode: DataTypes.STRING(50),
      price: DataTypes.DOUBLE,
      priceT: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true, withIsactive: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_import_dt',
    'PurchasePriceImportDt',
    sequelize
  )
);
export { PurchasePrice, PurchasePriceDt, PurchasePriceImport, PurchasePriceImportDt };

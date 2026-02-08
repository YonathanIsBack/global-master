import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class BuyingPriceListImport extends StandardModel {}
class BuyingPriceListImportDetail extends StandardModel {}

BuyingPriceListImport.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePriceImportId', DataTypes.BIGINT),
      name: DataTypes.STRING(50),
      publishTime: DataTypes.DATE,
      status: DataTypes.INTEGER,
      statusNext: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_price_import',
    'BuyingPriceListImport',
    sequelize
  )
);

BuyingPriceListImportDetail.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePriceImportDtId', DataTypes.BIGINT),
      purchasePriceImportId: DataTypes.BIGINT,
      currencyId: DataTypes.BIGINT,
      currencyCode: DataTypes.STRING(50),
      itemId: DataTypes.INTEGER,
      pack: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      // priceT: DataTypes.DOUBLE
      pricePack: DataTypes.DOUBLE,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_price_import_dt',
    'BuyingPriceListImportDetail',
    sequelize
  )
);

export { BuyingPriceListImport, BuyingPriceListImportDetail };

import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class BuyingPriceList extends StandardModel {}
class BuyingPriceListDetail extends StandardModel {}

BuyingPriceList.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePriceId', DataTypes.BIGINT),
      traceId: DataTypes.STRING(150),
      companyParentId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      name: DataTypes.STRING(50),
      publishTime: DataTypes.DATE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_purchase_price', 'BuyingPriceList', sequelize)
);

BuyingPriceListDetail.init(
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
    'BuyingPriceListDetail',
    sequelize
  )
);

export { BuyingPriceList, BuyingPriceListDetail };

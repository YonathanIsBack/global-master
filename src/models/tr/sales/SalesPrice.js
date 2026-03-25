import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class SalesPrice extends StandardModel {}
class SalesPriceDt extends StandardModel {}

SalesPrice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesPriceId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      name: DataTypes.STRING(50),
      publishTime: DataTypes.DATE,
      note: DataTypes.TEXT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_price', 'SalesPrice', sequelize)
);

SalesPriceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesPriceDtId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      salesPriceId: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      size: DataTypes.STRING(20),
      pack: DataTypes.STRING(20),
      country: DataTypes.STRING(20),
      vintage: DataTypes.STRING(20),
      customerTypeId: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_price_dt', 'SalesPriceDt', sequelize)
);
SalesPrice.hasMany(SalesPriceDt, { foreignKey: 'salesPriceId' });

export { SalesPrice, SalesPriceDt };

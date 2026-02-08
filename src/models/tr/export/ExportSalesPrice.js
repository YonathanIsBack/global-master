import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ExportSalesPrice extends StandardModel {}
class ExportSalesPriceDt extends StandardModel {}

ExportSalesPrice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPriceId', DataTypes.BIGINT),
      companyId: DataTypes.INTEGER,
      name: DataTypes.STRING(50),
      publishTime: DataTypes.DATEONLY,
      note: DataTypes.TEXT
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_price',
    'ExportSalesPrice',
    sequelize
  )
);

ExportSalesPriceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPriceDtId', DataTypes.BIGINT),
      exportSalesPriceId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      customerTypeId: DataTypes.INTEGER,
      currencyId: DataTypes.BIGINT,
      price: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_price_dt',
    'ExportSalesPriceDt',
    sequelize
  )
);

export { ExportSalesPrice, ExportSalesPriceDt };

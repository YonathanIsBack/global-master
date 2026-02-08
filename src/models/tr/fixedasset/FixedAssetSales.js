import { DataTypes } from 'sequelize';
import StandardModel from '../../StandardModel.js';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class FixedAssetSales extends StandardModel {}
class FixedAssetSalesDt extends StandardModel {}

FixedAssetSales.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetSalesId', DataTypes.BIGINT),
      fixedAssetSalesCode: DataTypes.STRING(50),
      fixedAssetSalesCodeTemp: DataTypes.STRING(50),
      fixedAssetSalesDate: DataTypes.DATE,
      note: DataTypes.TEXT,
      departementId: DataTypes.BIGINT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_fixed_asset_sales', 'FixedAssetSales', sequelize)
);

FixedAssetSalesDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetSalesDtId', DataTypes.BIGINT),
      fixedAssetSalesId: DataTypes.BIGINT,
      fixedAssetId: DataTypes.BIGINT,
      qty: DataTypes.BIGINT,
      faValue: DataTypes.DOUBLE,
      salvageValue: DataTypes.BIGINT,
      note: DataTypes.BIGINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_fixed_asset_sales_dt', 'FixedAssetSalesDt', sequelize)
);

export { FixedAssetSales, FixedAssetSalesDt };

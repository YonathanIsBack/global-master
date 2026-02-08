import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxExportSellingPrice extends StandardModel { }
class IxExportSellingPriceDt extends StandardModel { }

IxExportSellingPrice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixExportSellingPriceId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_export_selling_price', 'IxExportSellingPrice', sequelize)
);

IxExportSellingPriceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixExportSellingPriceDtId', DataTypes.BIGINT),
      ixExportSellingPriceId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(50),
      customerTypeId: DataTypes.BIGINT,
      currencyId: DataTypes.BIGINT,
      currencyCode: DataTypes.STRING(50),
      basicPrice: DataTypes.STRING(100),
      focPrice: DataTypes.STRING(50),
      aPrice: DataTypes.STRING(50),
      bPrice: DataTypes.STRING(50),
      cPrice: DataTypes.STRING(50),
      // basicPriceT: DataTypes.STRING(50),
      // focPriceT: DataTypes.STRING(50),
      // aPriceT: DataTypes.STRING(50),
      // bPriceT: DataTypes.STRING(50),
      // cPriceT: DataTypes.STRING(50),
      status: DataTypes.TINYINT,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_export_selling_price_dt', 'IxExportSellingPriceDt', sequelize)
);

export {
  IxExportSellingPrice,
  IxExportSellingPriceDt
};


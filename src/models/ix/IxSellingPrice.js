import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxSellingPrice extends StandardModel { }
class IxSellingPriceDt extends StandardModel { }

IxSellingPrice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSellingPriceId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_selling_price', 'IxSellingPrice', sequelize)
);

IxSellingPriceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSellingPriceDtId', DataTypes.BIGINT),
      ixSellingPriceId: DataTypes.BIGINT,
      customerTypeId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(50),
      basicPrice: DataTypes.STRING(100),
      focPrice: DataTypes.STRING(50),
      aPrice: DataTypes.STRING(50),
      bPrice: DataTypes.STRING(50),
      cPrice: DataTypes.STRING(50),
      status: DataTypes.TINYINT,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_selling_price_dt', 'IxSellingPriceDt', sequelize)
);

export {
  IxSellingPrice,
  IxSellingPriceDt
};


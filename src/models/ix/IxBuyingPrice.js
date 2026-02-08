import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxBuyingPrice extends StandardModel { }
class IxBuyingPriceDt extends StandardModel { }

IxBuyingPrice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBuyingPriceId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_buying_price', 'IxBuyingPrice', sequelize)
);

IxBuyingPriceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBuyingPriceDtId', DataTypes.BIGINT),
      ixBuyingPriceId: DataTypes.BIGINT,
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
  StandardModel.buildStandardModelInformation('ix_buying_price_dt', 'IxBuyingPriceDt', sequelize)
);

export {
  IxBuyingPrice,
  IxBuyingPriceDt
};


import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxBuyingPriceImport extends StandardModel { }
class IxBuyingPriceImportDt extends StandardModel { }

IxBuyingPriceImport.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBuyingPriceImportId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_buying_price_import', 'IxBuyingPriceImport', sequelize)
);

IxBuyingPriceImportDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBuyingPriceImportDtId', DataTypes.BIGINT),
      ixBuyingPriceImportId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(100),
      itemName: DataTypes.STRING(150),
      pack: DataTypes.DOUBLE,
      currencyId: DataTypes.BIGINT,
      currencyCode: DataTypes.STRING(50),
      // priceT: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      pricePack: DataTypes.DOUBLE,
      // pricePackT: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_buying_price_import_dt', 'IxBuyingPriceImportDt', sequelize)
);

export {
  IxBuyingPriceImport,
  IxBuyingPriceImportDt
};


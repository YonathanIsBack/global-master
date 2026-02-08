import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../../configs/DatabaseConnection.js";
import StandardModel from "../../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class ItemFifo extends StandardModel { }

ItemFifo.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('historyItemFifoId', DataTypes.BIGINT),
      whId: DataTypes.BIGINT,
      currencyId: DataTypes.BIGINT,
      currencyRate: DataTypes.DOUBLE,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      rfid: DataTypes.STRING(250),
      itemCategoryId: DataTypes.BIGINT,
      itemCategorySubId: DataTypes.BIGINT,
      brandId: DataTypes.BIGINT,
      iscombo: DataTypes.TINYINT,
      transactionId: DataTypes.BIGINT,
      transactionType: DataTypes.INTEGER,
      transactionDate: DataTypes.DATE,
      transactionCode: DataTypes.STRING(50),
      qty: DataTypes.FLOAT,
      qtyUsed: DataTypes.FLOAT,
      qtyInAvg: DataTypes.FLOAT,
      qtyOutAvg: DataTypes.FLOAT,
      price: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      priceCurrency: DataTypes.DOUBLE,
      priceCurrencyAvg: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      note: DataTypes.TEXT,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('sm_tr_item_fifo', 'ItemFifo', sequelize)
);

export default ItemFifo;

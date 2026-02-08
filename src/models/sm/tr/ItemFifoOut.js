import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../../configs/DatabaseConnection.js";
import StandardModel from "../../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class ItemFifoOut extends StandardModel { }

ItemFifoOut.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('historyItemFifoOutId', DataTypes.BIGINT),
      historyItemFifoId: DataTypes.BIGINT,
      whId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
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
      qtyOut: DataTypes.FLOAT,
      qtyInAvg: DataTypes.FLOAT,
      qtyOutAvg: DataTypes.FLOAT,
      price: DataTypes.DOUBLE,
      priceFifo: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      priceCurrency: DataTypes.DOUBLE,
      priceCurrencyFifo: DataTypes.DOUBLE,
      priceCurrencyAvg: DataTypes.DOUBLE,
      note: DataTypes.TEXT,
    },
    { withCreate: true, }
  ),
  StandardModel.buildStandardModelInformation('sm_tr_item_fifo_out', 'ItemFifoOut', sequelize)
);

export default ItemFifoOut;

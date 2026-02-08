import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ItemStockCard extends StandardModel { }
class ItemStockCardDt extends StandardModel { }

ItemStockCard.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockCardId', DataTypes.BIGINT),
      whId: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(150),
      itemName: DataTypes.STRING(150),
      rfid: DataTypes.INTEGER,
      itemCategoryId: DataTypes.INTEGER,
      itemCategorySubId: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
      iscombo: DataTypes.TINYINT,
      transactionId: DataTypes.BIGINT,
      transactionType: DataTypes.INTEGER,
      transactionDate: DataTypes.DATE,
      transactionCode: DataTypes.STRING(50),
      note: DataTypes.TEXT,
      status: DataTypes.STRING(25),
      qtyIn: DataTypes.FLOAT,
      qtyOut: DataTypes.FLOAT,
      qtyBeginning: DataTypes.FLOAT,
      lastQty: DataTypes.FLOAT,
      priceAvg: DataTypes.DOUBLE,
      totalAvg: DataTypes.DOUBLE,
      priceFifo: DataTypes.DOUBLE,
      totalFifo: DataTypes.DOUBLE,
      priceLifo: DataTypes.DOUBLE,
      totalLifo: DataTypes.DOUBLE,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('sm_item_stock_card', 'ItemStockCard', sequelize)
);

ItemStockCardDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemStockCardDtId', DataTypes.BIGINT),
      itemStockDtId: DataTypes.BIGINT,
      whId: DataTypes.INTEGER,
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(100),
      itemName: DataTypes.STRING(150),
      rfid: DataTypes.STRING(50),
      itemCategoryId: DataTypes.BIGINT,
      itemCategorySubId: DataTypes.BIGINT,
      brandId: DataTypes.BIGINT,
      iscombo: DataTypes.TINYINT,
      transactionId: DataTypes.BIGINT,
      transactionType: DataTypes.INTEGER,
      transactionDate: DataTypes.DATE,
      transactionCode: DataTypes.STRING(150),
      note: DataTypes.TEXT,
      expDay: DataTypes.INTEGER,
      expMonth: DataTypes.INTEGER,
      expYear: DataTypes.INTEGER,
      qtyIn: DataTypes.DOUBLE,
      qtyOut: DataTypes.DOUBLE,
      qtyBeginning: DataTypes.DOUBLE,
      lastQty: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      totalAvg: DataTypes.DOUBLE,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('sm_item_stock_card_dt', 'ItemStockCardDt', sequelize)
);

export { ItemStockCard, ItemStockCardDt };

import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ItemStockCardPending extends StandardModel { }
class ItemStockCardPendingDt extends StandardModel { }

ItemStockCardPending.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockCardPendingId', DataTypes.BIGINT),
      whId: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(150),
      itemName: DataTypes.STRING(150),
      rfid: DataTypes.INTEGER,
      itemCategoryId: DataTypes.INTEGER,
      itemCategorySubId: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
      iscombo: DataTypes.TINYINT,
      transactionIdFrom: DataTypes.BIGINT,
      transactionTypeFrom: DataTypes.INTEGER,
      transactionIdTo: DataTypes.BIGINT,
      transactionTypeTo: DataTypes.INTEGER,
      transactionDate: DataTypes.DATE,
      transactionCodeFrom: DataTypes.STRING(50),
      transactionCodeTo: DataTypes.STRING(50),
      note: DataTypes.TEXT,
      status: DataTypes.STRING(25),
      type: DataTypes.STRING(150),
      typeTrans: DataTypes.STRING(150),
      stockCardType: DataTypes.STRING(100),
      lastQty: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      totalAvg: DataTypes.DOUBLE,
      priceFifo: DataTypes.DOUBLE,
      totalFifo: DataTypes.DOUBLE,
      priceLifo: DataTypes.DOUBLE,
      totalLifo: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('sm_item_stock_card_pending', 'ItemStockCardPending', sequelize)
);

ItemStockCardPendingDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemStockCardDtPendingId', DataTypes.BIGINT),
      itemStockDtPendingId: DataTypes.BIGINT,
      whId: DataTypes.INTEGER,
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(100),
      itemName: DataTypes.STRING(150),
      rfid: DataTypes.STRING(50),
      itemCategoryId: DataTypes.BIGINT,
      itemCategorySubId: DataTypes.BIGINT,
      brandId: DataTypes.BIGINT,
      iscombo: DataTypes.TINYINT,
      transactionIdFrom: DataTypes.BIGINT,
      transactionTypeFrom: DataTypes.INTEGER,
      transactionIdTo: DataTypes.BIGINT,
      transactionTypeTo: DataTypes.INTEGER,
      transactionDate: DataTypes.DATE,
      transactionCodeFrom: DataTypes.STRING(150),
      transactionCodeTo: DataTypes.STRING(150),
      note: DataTypes.TEXT,
      status: DataTypes.STRING(25),
      expDay: DataTypes.INTEGER,
      expMonth: DataTypes.INTEGER,
      expYear: DataTypes.INTEGER,
      type: DataTypes.STRING(150),
      typeTrans: DataTypes.STRING(150),
      stockCardType: DataTypes.STRING(100),
      qtyIn: DataTypes.DOUBLE,
      qtyOut: DataTypes.DOUBLE,
      qtyBeginning: DataTypes.DOUBLE,
      lastQty: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      totalAvg: DataTypes.DOUBLE,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('sm_item_stock_card_dt_pending', 'ItemStockCardPendingDt', sequelize)
);

export { ItemStockCardPending, ItemStockCardPendingDt };

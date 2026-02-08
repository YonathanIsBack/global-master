import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class Bc16CardItemDtPending extends StandardModel { }

Bc16CardItemDtPending.init(
  StandardModel.buildPropertyWithOptions(
    {
      bc16CardDtPendingId: {
        type: DataTypes.BIGINT,
        field: 'bc_16_card_dt_pending_id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          isInt: { msg: 'Primary Key must be Integer' },
          notNull: { msg: 'Primary Key cannot be null' }
        }
      },
      bc16Id: { type: DataTypes.BIGINT, field: 'bc_16_id' },
      bc16DtId: { type: DataTypes.BIGINT, field: 'bc_16_dt_id' },
      bc16Code: { type: DataTypes.STRING(50), field: 'bc_16_code' },
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(250),
      itemPack: DataTypes.DOUBLE,
      warehouseId: DataTypes.BIGINT,
      transactionType: DataTypes.STRING(50),
      transactionId: DataTypes.BIGINT,
      transactionDate: DataTypes.DATE,
      transactionCode: DataTypes.STRING(150),
      status: DataTypes.INTEGER,
      currencyId: DataTypes.BIGINT,
      currencyRate: DataTypes.DOUBLE,
      supplierId: DataTypes.BIGINT,
      customerId: DataTypes.BIGINT,
      price: DataTypes.DOUBLE,
      hpp: DataTypes.DOUBLE,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qtyPlus: DataTypes.DOUBLE,
      qtyMinus: DataTypes.DOUBLE,
      qtyBeginning: DataTypes.DOUBLE,
      lastQty: DataTypes.DOUBLE,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('sm_bc_16_card_item_dt_pending', 'Bc16CardItemDtPending', sequelize)
);

export default Bc16CardItemDtPending;

import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";
import { createTaxSchema } from "../../schemavalidation/taxSchema.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class Bc16CardPending extends StandardModel { }

Bc16CardPending.init(
  StandardModel.buildPropertyWithOptions(
    {
      bc16CardPendingId: {
        type: DataTypes.BIGINT,
        field: 'bc_16_card_pending_id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          isInt: { msg: 'Primary Key must be Integer' },
          notNull: { msg: 'Primary Key cannot be null' }
        }
      },
      bc16Id: { type: DataTypes.BIGINT, field: 'bc_16_id' },
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      supplierId: DataTypes.INTEGER,
      customerId: DataTypes.BIGINT,
      warehouseId: DataTypes.INTEGER,
      bc16Code: { type: DataTypes.STRING(50), field: 'bc_16_code' },
      bcStatus: DataTypes.STRING(50),
      transactionType: DataTypes.STRING(25),
      transactionId: DataTypes.BIGINT,
      transactionDate: DataTypes.DATE,
      transactionCode: DataTypes.STRING(150),
      note: DataTypes.TEXT,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      itemPack: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      qtyPlus: DataTypes.DOUBLE,
      qtyMinus: DataTypes.DOUBLE,
      qtyBeginning: DataTypes.DOUBLE,
      lastQty: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      price2: { type: DataTypes.DOUBLE, field: 'price_2' },
      hpp: DataTypes.DOUBLE,
      discPersen: DataTypes.DOUBLE,
      discAmount: DataTypes.DOUBLE,
      discAmount2: { type: DataTypes.DOUBLE, field: 'disc_amount2' },
      disc3: { type: DataTypes.DOUBLE, field: 'disc3' },
      taxPersen: DataTypes.DOUBLE,
      taxAmount: DataTypes.DOUBLE,
      adjInvType: DataTypes.TINYINT,
      adjInv: DataTypes.DOUBLE,
      adjInvPcs: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('sm_bc_16_card_pending', 'Bc16CardPending', sequelize)
);

export default Bc16CardPending;

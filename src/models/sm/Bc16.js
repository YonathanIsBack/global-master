import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class Bc16 extends StandardModel { }

Bc16.init(
  StandardModel.buildPropertyWithOptions(
    {
      bc16Id: {
        type: DataTypes.BIGINT,
        field: 'bc_16_id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          isInt: { msg: 'Primary Key must be Integer' },
          notNull: { msg: 'Primary Key cannot be null' }
        }
      },
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      supplierId: DataTypes.INTEGER,
      warehouseId: DataTypes.INTEGER,
      bc16Code: { type: DataTypes.STRING(50), field: 'bc_16_code' },
      bcStatus: DataTypes.STRING(50),
      importOrderId: DataTypes.BIGINT,
      importOrderDtId: DataTypes.BIGINT,
      importOrderCode: DataTypes.STRING(50),
      importReceiveId: DataTypes.BIGINT,
      importReceiveDtId: DataTypes.BIGINT,
      importReceiveCode: DataTypes.STRING(50),
      importInvId: DataTypes.BIGINT,
      importInvDtId: DataTypes.BIGINT,
      importInvCode: DataTypes.STRING(50),
      inventoryAdjustmentId: DataTypes.BIGINT,
      inventoryAdjustmentDtId: DataTypes.BIGINT,
      inventoryAdjustmentCode: DataTypes.STRING(150),
      inventoryTransferId: DataTypes.BIGINT,
      inventoryTransferDtId: DataTypes.BIGINT,
      inventoryTransferCode: DataTypes.STRING(150),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      itemPack: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      qty: DataTypes.DOUBLE,
      qtyUsed: DataTypes.DOUBLE,
      qtyStockUsed: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      discPersen: DataTypes.DOUBLE,
      discAmount: DataTypes.DOUBLE,
      discAmount2: { type: DataTypes.DOUBLE, field: 'disc_amount2' },
      disc3: { type: DataTypes.DOUBLE, field: 'disc3' },
      taxPersen: DataTypes.DOUBLE,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('sm_bc_16', 'Bc16', sequelize)
);

export default Bc16;

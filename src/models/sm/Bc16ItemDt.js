import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class Bc16ItemDt extends StandardModel { }

Bc16ItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      bc16DtId: {
        type: DataTypes.BIGINT,
        field: 'bc_16_dt_id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          isInt: { msg: 'Primary Key must be Integer' },
          notNull: { msg: 'Primary Key cannot be null' }
        }
      },
      bc16Id: {
        type: DataTypes.BIGINT,
        field: 'bc_16_id',
      },
      importReceiveItemDtId: DataTypes.BIGINT,
      importReceiveDtId: DataTypes.BIGINT,
      importReceiveId: DataTypes.BIGINT,
      importInvItemDtId: DataTypes.BIGINT,
      importInvDtId: DataTypes.BIGINT,
      importInvId: DataTypes.BIGINT,
      inventoryAdjustmentItemDtId: DataTypes.BIGINT,
      inventoryAdjustmentDtId: DataTypes.BIGINT,
      inventoryAdjustmentId: DataTypes.BIGINT,
      inventoryTransferItemDtId: DataTypes.BIGINT,
      inventoryTransferDtId: DataTypes.BIGINT,
      inventoryTransferId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemPack: DataTypes.DOUBLE,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyUsed: DataTypes.DOUBLE,
      qtyStockUsed: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('sm_bc_16_item_dt', 'Bc16ItemDt', sequelize)
);

export default Bc16ItemDt;

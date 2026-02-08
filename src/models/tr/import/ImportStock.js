import { BIGINT, DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportStockTransfer extends StandardModel { }
class ImportStockTransferDt extends StandardModel { }
class ImportStockTransferItemDt extends StandardModel { }
class ImportStockTransferReject extends StandardModel { }
class ImportStockTransferRequest extends StandardModel { }

ImportStockTransfer.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importStockTransferId', DataTypes.BIGINT),
      importStockTransferCode: DataTypes.STRING(50),
      importStockTransferCodeTemp: DataTypes.STRING(50),
      importStockTransferDate: DataTypes.DATEONLY,
      traceId: DataTypes.STRING(150),
      supplierId: DataTypes.INTEGER,
      warehouseIdFrom: DataTypes.INTEGER,
      warehouseIdTo: DataTypes.INTEGER,
      importOrderId: DataTypes.BIGINT,
      importOrderCode: DataTypes.STRING(50),
      importReceiveId: DataTypes.STRING(500),
      importReceiveCode: DataTypes.STRING(500),
      ajuNumber: DataTypes.STRING(50),
      ajuDate: DataTypes.DATE,
      shipping: DataTypes.TEXT,
      shippingNo: DataTypes.STRING(50),
      shippingDate: DataTypes.DATE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      driver: DataTypes.STRING(50),
      bc16: { type: DataTypes.STRING(150), field: 'bc_16' },
      bc16Rn: { type: DataTypes.STRING(150), field: 'bc_16_rn' },
      licensePlate: DataTypes.STRING(15),
      methodTransfer: DataTypes.TEXT,
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isvat: DataTypes.TINYINT,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      coaPibId: DataTypes.BIGINT,
      coaBankId: DataTypes.BIGINT,
      totalPib: DataTypes.DOUBLE,
      totalPayFinish: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_stock_transfer',
    'ImportStockTransfer',
    sequelize
  )
);

ImportStockTransferDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importStockTransferDtId', DataTypes.BIGINT),
      importStockTransferId: DataTypes.BIGINT,
      bc16Id: { type: DataTypes.BIGINT, field: 'bc_16_id' },
      importReceiveId: DataTypes.BIGINT,
      importReceiveDtId: DataTypes.BIGINT,
      importReceiveCode: DataTypes.STRING(50),
      importOrderId: DataTypes.BIGINT,
      importOrderCode: DataTypes.STRING(50),
      submissionNo: DataTypes.STRING(150),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      itemPack: DataTypes.DOUBLE,
      bc16: DataTypes.STRING(150),
      qty: DataTypes.FLOAT,
      qtyReceive: DataTypes.FLOAT,
      qtyRemain: DataTypes.FLOAT,
      qtyStock: DataTypes.FLOAT,
      qtyClearance: DataTypes.FLOAT,
      qtyIc: DataTypes.FLOAT,
      price: DataTypes.DOUBLE,
      pricePack: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      adjInv: DataTypes.DOUBLE,
      adjInvPcs: DataTypes.DOUBLE,
      adjInvType: DataTypes.TINYINT,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_stock_transfer_dt',
    'ImportStockTransferDt',
    sequelize
  )
);

ImportStockTransferItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importStockTransferItemDtId', DataTypes.BIGINT),
      importStockTransferDtId: DataTypes.BIGINT,
      importStockTransferId: DataTypes.BIGINT,
      importReceiveItemDtId: DataTypes.BIGINT,
      bc16Id: { type: DataTypes.BIGINT, field: 'bc_16_id' },
      bc16DtId: { type: DataTypes.BIGINT, field: 'bc_16_dt_id' },
      itemId: DataTypes.BIGINT,
      itemPack: DataTypes.DOUBLE,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyC: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_stock_transfer_item_dt',
    'ImportStockTransferItemDt',
    sequelize
  )
);

ImportStockTransferReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importStockTransferRejectId', DataTypes.BIGINT),
      importStockTransferId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_stock_transfer_reject',
    'ImportStockTransferReject',
    sequelize
  )
);

ImportStockTransferRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importStockTransferRequestId', DataTypes.BIGINT),
      importStockTransferId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_stock_transfer_request',
    'ImportStockTransferRequest',
    sequelize
  )
);
export {
  ImportStockTransfer,
  ImportStockTransferDt,
  ImportStockTransferItemDt,
  ImportStockTransferReject,
  ImportStockTransferRequest
};

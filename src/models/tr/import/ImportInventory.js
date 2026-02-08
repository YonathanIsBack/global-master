import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportInventory extends StandardModel {}
class ImportInventoryAdvancePay extends StandardModel {}
class ImportInventoryCreditNote extends StandardModel {}
class ImportInventoryDt extends StandardModel {}
class ImportInventoryItemDt extends StandardModel {}
class ImportInventoryPayment extends StandardModel {}
class ImportInventoryReject extends StandardModel {}
class ImportInventoryRequest extends StandardModel {}

ImportInventory.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvId', DataTypes.BIGINT),
      importInvCode: DataTypes.STRING(50),
      importInvCodeTemp: DataTypes.STRING(50),
      importInvDate: DataTypes.DATE,
      importOrderId: DataTypes.BIGINT,
      importOrderCode: DataTypes.STRING(50),
      importReceiveId: DataTypes.STRING(500),
      importReceiveCode: DataTypes.STRING(500),
      importAdvpayId: DataTypes.BIGINT,
      traceId: DataTypes.STRING(150),
      warehouseId: DataTypes.INTEGER,
      paymentTermId: DataTypes.INTEGER,
      dueDate: DataTypes.DATE,
      supplierId: DataTypes.INTEGER,
      suppInvNo: DataTypes.STRING(25),
      suppInvDate: DataTypes.DATE,
      suppInvTotal: DataTypes.DOUBLE,
      bc16: DataTypes.STRING(150),
      ajuNumber: DataTypes.STRING(150),
      ajuDate: DataTypes.DATE,
      customesOffice: DataTypes.STRING(150),
      regisDate: DataTypes.DATE,
      isvat: DataTypes.INTEGER,
      vatNo: DataTypes.STRING(25),
      vatDate: DataTypes.DATE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      shippingPrice: DataTypes.DOUBLE,
      handlingPrice: DataTypes.DOUBLE,
      paymentCode: DataTypes.STRING(50),
      total: DataTypes.DOUBLE,
      totalAdvpay: DataTypes.DOUBLE,
      totalCreditNote: DataTypes.DOUBLE,
      totalCreditNotePayment: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      totalReturn: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE,
      pphPersen: DataTypes.FLOAT,
      pphAmount: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      note: DataTypes.TEXT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isEdit: DataTypes.TINYINT,
      type: DataTypes.STRING(20),
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_import_inv', 'ImportInventory', sequelize)
);

ImportInventoryAdvancePay.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvAdvpayId', DataTypes.BIGINT),
      importInvId: DataTypes.BIGINT,
      importAdvpayId: DataTypes.STRING(20),
      importAdvpayCode: DataTypes.STRING(50),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isorder: DataTypes.TINYINT,
      type: DataTypes.STRING(20)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_inv_advpay',
    'ImportInventoryAdvancePay',
    sequelize
  )
);

ImportInventoryCreditNote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvCreditNoteId', DataTypes.BIGINT),
      importInvId: DataTypes.BIGINT,
      importCreditNoteId: DataTypes.BIGINT,
      importCreditNoteName: DataTypes.STRING(150),
      importCreditNoteCode: DataTypes.STRING(50),
      traceId: DataTypes.STRING(150),
      isorder: DataTypes.TINYINT,
      nominal: DataTypes.DOUBLE,
      used: DataTypes.DOUBLE,
      isinv: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_inv_credit_note',
    'ImportInventoryCreditNote',
    sequelize
  )
);

ImportInventoryDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvDtId', DataTypes.BIGINT),
      importInvId: DataTypes.BIGINT,
      importReceiveId: DataTypes.BIGINT,
      importReceiveDtId: DataTypes.BIGINT,
      importReceiveCode: DataTypes.STRING(25),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      qty: DataTypes.DOUBLE,
      qtyOrder: DataTypes.DOUBLE,
      qtyReceive: DataTypes.DOUBLE,
      qtyIp: DataTypes.DOUBLE,
      qtyIr: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // disc3: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_import_inv_dt', 'ImportInventoryDt', sequelize)
);

ImportInventoryItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvItemDtId', DataTypes.BIGINT),
      importInvDtId: DataTypes.BIGINT,
      importInvId: DataTypes.BIGINT,
      importReceiveItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyR: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_inv_item_dt',
    'ImportInventoryItemDt',
    sequelize
  )
);

ImportInventoryPayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvPaymentId', DataTypes.BIGINT),
      importInvId: DataTypes.BIGINT,
      importAdvpayId: DataTypes.BIGINT,
      traceId: DataTypes.BIGINT,
      paymentCode: DataTypes.STRING(50),
      dpAmount: DataTypes.DOUBLE,
      dpUsed: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_inv_payment',
    'ImportInventoryPayment',
    sequelize
  )
);

ImportInventoryReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvRejectId', DataTypes.BIGINT),
      importInvId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_inv_reject',
    'ImportInventoryReject',
    sequelize
  )
);

ImportInventoryRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvRequestId', DataTypes.BIGINT),
      importInvId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_inv_request',
    'ImportInventoryRequest',
    sequelize
  )
);
export {
  ImportInventory,
  ImportInventoryAdvancePay,
  ImportInventoryCreditNote,
  ImportInventoryDt,
  ImportInventoryItemDt,
  ImportInventoryPayment,
  ImportInventoryReject,
  ImportInventoryRequest
};

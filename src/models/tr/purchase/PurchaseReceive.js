import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class PurchaseReceive extends StandardModel { }
class PurchaseReceiveDt extends StandardModel { }
class PurchaseReceiveItemDt extends StandardModel { }
class PurchaseReceiveReject extends StandardModel { }
class PurchaseReceiveRequest extends StandardModel { }

PurchaseReceive.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseReceiveId', DataTypes.BIGINT),
      purchaseReceiveCode: DataTypes.STRING(50),
      purchaseReceiveCodeTemp: DataTypes.STRING(50),
      purchaseReceiveDate: DataTypes.DATEONLY,
      purchaseOrderId: DataTypes.BIGINT,
      purchaseOrderCode: DataTypes.STRING(50),
      traceId: DataTypes.STRING(150),
      supInvNumber: DataTypes.STRING(150),
      supInvTotal: DataTypes.DOUBLE,
      supInvDate: DataTypes.DATE,
      supplierId: DataTypes.INTEGER,
      deliveryMethod: DataTypes.STRING(500),
      documentNumber: DataTypes.STRING(150),
      deliveryDate: DataTypes.DATEONLY,
      warehouseId: DataTypes.INTEGER,
      paymentTermId: DataTypes.INTEGER,
      shipping: DataTypes.TEXT,
      shippingNo: DataTypes.STRING(50),
      shippingDate: DataTypes.DATEONLY,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      driver: DataTypes.STRING(50),
      ajuDate: DataTypes.DATE,
      ajuNumber: DataTypes.STRING(50),
      bc16: { type: DataTypes.STRING(150), field: 'bc_16' },
      bc16Rn: { type: DataTypes.STRING(150), field: 'bc_16_rn' },
      blNumber: DataTypes.STRING(150),
      licensePlate: DataTypes.STRING(50),
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      isvat: DataTypes.INTEGER,
      port: DataTypes.STRING(150),
      method: DataTypes.STRING(150),
      totalPacking: DataTypes.DOUBLE,
      destination: DataTypes.STRING(250),
      containerSize: DataTypes.STRING(150),
      grossWeight: DataTypes.STRING(150),
      regisNumber: DataTypes.STRING(150),
      customesOffice: DataTypes.STRING(200),
      submissionNumber: DataTypes.STRING(150),
      storageLocation: DataTypes.STRING(150),
      regisDate: DataTypes.DATE,
      submissionDate: DataTypes.DATE,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      discPersen3: DataTypes.FLOAT,
      discAmount3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalInv: DataTypes.DOUBLE,
      totalPayFinish: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      isBc16: { type: DataTypes.TINYINT, field: 'is_bc_16' },
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_purchase_receive', 'PurchaseReceive', sequelize)
);

PurchaseReceiveDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseReceiveDtId', DataTypes.BIGINT),
      purchaseReceiveId: DataTypes.BIGINT,
      purchaseOrderId: DataTypes.BIGINT,
      purchaseOrderDtId: DataTypes.BIGINT,
      purchaseOrderCode: DataTypes.STRING(25),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      qty: DataTypes.DOUBLE,
      qtyPt: DataTypes.DOUBLE,
      qtyPi: DataTypes.DOUBLE,
      qtyOrder: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      adjInv: DataTypes.DOUBLE,
      adjInvPcs: DataTypes.DOUBLE,
      adjInvType: DataTypes.TINYINT,
      total: DataTypes.DOUBLE,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_receive_dt',
    'PurchaseReceiveDt',
    sequelize
  )
);

PurchaseReceiveItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseReceiveItemDtId', DataTypes.BIGINT),
      purchaseReceiveDtId: DataTypes.BIGINT,
      purchaseReceiveId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      purchaseOrderItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyI: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_receive_item_dt',
    'PurchaseReceiveItemDt',
    sequelize
  )
);

PurchaseReceiveReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseReceiveRejectId', DataTypes.BIGINT),
      purchaseReceiveId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_receive_reject',
    'PurchaseReceiveReject',
    sequelize
  )
);

PurchaseReceiveRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseReceiveRequestId', DataTypes.BIGINT),
      purchaseReceiveId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_receive_request',
    'PurchaseReceiveRequest',
    sequelize
  )
);

export {
  PurchaseReceive,
  PurchaseReceiveDt,
  PurchaseReceiveItemDt,
  PurchaseReceiveReject,
  PurchaseReceiveRequest
};

import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class OffshorePurchaseOrder extends StandardModel { }
class OffshorePurchaseOrderAdvpay extends StandardModel { }
class OffshorePurchaseOrderDt extends StandardModel { }
class OffshorePurchaseOrderItemDt extends StandardModel { }
class OffshorePurchaseOrderReject extends StandardModel { }
class OffshorePurchaseOrderRequest extends StandardModel { }

OffshorePurchaseOrder.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseOrderId', DataTypes.BIGINT),
      offshorePurchaseOrderCode: DataTypes.STRING(50),
      offshorePurchaseOrderCodeTemp: DataTypes.STRING(50),
      offshorePurchaseOrderDate: DataTypes.DATE,
      traceId: DataTypes.STRING(150),
      supplierId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      paymentTermId: DataTypes.INTEGER,
      topDays: DataTypes.INTEGER,
      dueDate: DataTypes.DATEONLY,
      note: DataTypes.TEXT,
      warehouseId: DataTypes.BIGINT,
      address: DataTypes.TEXT,
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
      totalAdvpay: DataTypes.DOUBLE,
      totalCreditNote: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_offshore_purchase_order', 'OffshorePurchaseOrder', sequelize)
);

OffshorePurchaseOrderAdvpay.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseOrderAdvpayId', DataTypes.BIGINT),
      offshorePurchaseOrderId: DataTypes.BIGINT,
      offshorePurchaseAdvpayId: DataTypes.BIGINT,
      offshorePurchaseAdvpayCode: DataTypes.STRING(150),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isadv: DataTypes.TINYINT,
      type: DataTypes.STRING(50)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_order_advpay',
    'OffshorePurchaseOrderAdvpay',
    sequelize
  )
);

OffshorePurchaseOrderDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseOrderDtId', DataTypes.BIGINT),
      offshorePurchaseOrderId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(200),
      itemPack: DataTypes.STRING(50),
      qty: DataTypes.DOUBLE,
      qtyPr: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: { type: DataTypes.FLOAT, field: 'disc_persen2' },
      discAmount2: { type: DataTypes.DOUBLE, field: 'disc_amount2' },
      disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_offshore_purchase_order_dt', 'OffshorePurchaseOrderDt', sequelize)
);

OffshorePurchaseOrderItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseOrderItemDtId', DataTypes.BIGINT),
      offshorePurchaseOrderDtId: DataTypes.BIGINT,
      offshorePurchaseOrderId: DataTypes.BIGINT,
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
    'tr_offshore_purchase_order_item_dt',
    'OffshorePurchaseOrderItemDt',
    sequelize
  )
);

OffshorePurchaseOrderReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseOrderRejectId', DataTypes.BIGINT),
      offshorePurchaseOrderId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_order_reject',
    'OffshorePurchaseOrderReject',
    sequelize
  )
);

OffshorePurchaseOrderRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseOrderRequestId', DataTypes.BIGINT),
      offshorePurchaseOrderId: DataTypes.BIGINT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_order_request',
    'OffshorePurchaseOrderRequest',
    sequelize
  )
);

export {
  OffshorePurchaseOrder,
  OffshorePurchaseOrderAdvpay,
  OffshorePurchaseOrderDt,
  OffshorePurchaseOrderItemDt,
  OffshorePurchaseOrderReject,
  OffshorePurchaseOrderRequest,
}


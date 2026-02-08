import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class OffshorePurchaseReceive extends StandardModel { }
class OffshorePurchaseReceiveDt extends StandardModel { }
class OffshorePurchaseReceiveItemDt extends StandardModel { }
class OffshorePurchaseReceiveReject extends StandardModel { }
class OffshorePurchaseReceiveRequest extends StandardModel { }

OffshorePurchaseReceive.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseReceiveId', DataTypes.BIGINT),
      offshorePurchaseOrderId: DataTypes.BIGINT,
      offshorePurchaseOrderCode: DataTypes.STRING(150),
      offshorePurchaseReceiveCode: DataTypes.STRING(150),
      offshorePurchaseReceiveCodeTemp: DataTypes.STRING(150),
      offshorePurchaseReceiveDate: DataTypes.DATEONLY,
      traceId: DataTypes.STRING(150),
      supplierId: DataTypes.BIGINT,
      supplierInvNumber: DataTypes.STRING(100),
      supplierInvDate: DataTypes.DATE,
      currencyId: DataTypes.BIGINT,
      currencyRate: DataTypes.DOUBLE,
      paymentTermId: DataTypes.BIGINT,
      topDays: DataTypes.INTEGER,
      shipping: DataTypes.STRING(150),
      shippingDate: DataTypes.DATE,
      shippingNo: DataTypes.STRING(150),
      wbNo: DataTypes.STRING(150),
      portOfOrigin: DataTypes.STRING(150),
      portOfDestination: DataTypes.STRING(150),
      warehouseId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
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
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.BIGINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.BIGINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_offshore_purchase_receive', 'OffshorePurchaseReceive', sequelize)
);

OffshorePurchaseReceiveDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseReceiveDtId', DataTypes.BIGINT),
      offshorePurchaseReceiveId: DataTypes.BIGINT,
      offshorePurchaseOrderId: DataTypes.BIGINT,
      offshorePurchaseOrderDtId: DataTypes.BIGINT,
      offshorePurchaseOrderCode: DataTypes.STRING(25),
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(150),
      itemName: DataTypes.STRING(200),
      itemPack: DataTypes.STRING(50),
      qty: DataTypes.DOUBLE,
      qtyPi: DataTypes.DOUBLE,
      qtyOrder: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      discPersen3: DataTypes.FLOAT,
      discAmount3: DataTypes.DOUBLE,
      disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_receive_dt',
    'OffshorePurchaseReceiveDt',
    sequelize
  )
);

OffshorePurchaseReceiveItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseReceiveItemDtId', DataTypes.BIGINT),
      offshorePurchaseReceiveDtId: DataTypes.BIGINT,
      offshorePurchaseReceiveId: DataTypes.BIGINT,
      offshorePurchaseOrderItemDtId: DataTypes.BIGINT,
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
    'tr_offshore_purchase_receive_item_dt',
    'OffshorePurchaseReceiveItemDt',
    sequelize
  )
);

OffshorePurchaseReceiveReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseReceiveRejectId', DataTypes.BIGINT),
      offshorePurchaseReceiveId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_receive_reject',
    'OffshorePurchaseReceiveReject',
    sequelize
  )
);

OffshorePurchaseReceiveRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseReceiveRequestId', DataTypes.BIGINT),
      offshorePurchaseReceiveId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_receive_request',
    'OffshorePurchaseReceiveRequest',
    sequelize
  )
);

export {
  OffshorePurchaseReceive,
  OffshorePurchaseReceiveDt,
  OffshorePurchaseReceiveItemDt,
  OffshorePurchaseReceiveReject,
  OffshorePurchaseReceiveRequest
};


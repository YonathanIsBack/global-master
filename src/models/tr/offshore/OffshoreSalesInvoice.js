import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class OffshoreSalesInvoice extends StandardModel { }
class OffshoreSalesInvoiceDt extends StandardModel { }
class OffshoreSalesInvoiceItemDt extends StandardModel { }
class OffshoreSalesInvoiceReject extends StandardModel { }
class OffshoreSalesInvoiceRequest extends StandardModel { }

OffshoreSalesInvoice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshoreSalesInvId', DataTypes.BIGINT),
      offshoreSalesInvCode: DataTypes.STRING(150),
      offshoreSalesInvCodeTemp: DataTypes.STRING(150),
      offshoreSalesInvDate: DataTypes.DATEONLY,
      traceId: DataTypes.STRING(150),
      customerId: DataTypes.BIGINT,
      currencyId: DataTypes.BIGINT,
      currencyRate: DataTypes.DOUBLE,
      paymentTermId: DataTypes.BIGINT,
      topDays: DataTypes.INTEGER,
      dueDate: DataTypes.DATE,
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
      total: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      isedit: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_offshore_sales_inv', 'OffshoreSalesInvoice', sequelize)
);

OffshoreSalesInvoiceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshoreSalesInvDtId', DataTypes.BIGINT),
      offshoreSalesInvId: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(150),
      itemName: DataTypes.STRING(150),
      itemPack: DataTypes.STRING(100),
      qty: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_offshore_sales_inv_dt', 'OffshoreSalesInvoiceDt', sequelize)
);

OffshoreSalesInvoiceItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshoreSalesInvItemDtId', DataTypes.BIGINT),
      offshoreSalesInvDtId: DataTypes.BIGINT,
      offshoreSalesInvId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_sales_inv_item_dt',
    'OffshoreSalesInvoiceItemDt',
    sequelize
  )
);

OffshoreSalesInvoiceReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshoreSalesInvRejectId', DataTypes.BIGINT),
      offshoreSalesInvId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_sales_inv_reject',
    'OffshoreSalesInvoiceReject',
    sequelize
  )
);

OffshoreSalesInvoiceRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshoreSalesInvRequestId', DataTypes.BIGINT),
      offshoreSalesInvId: DataTypes.BIGINT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_sales_inv_request',
    'OffshoreSalesInvoiceRequest',
    sequelize
  )
);

export {
  OffshoreSalesInvoice,
  OffshoreSalesInvoiceDt,
  OffshoreSalesInvoiceItemDt,
  OffshoreSalesInvoiceReject,
  OffshoreSalesInvoiceRequest
};

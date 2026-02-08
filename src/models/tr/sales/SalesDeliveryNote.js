import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class SalesDeliveryNote extends StandardModel {}
class SalesDeliveryNoteDt extends StandardModel {}
class SalesDeliveryNoteItemDt extends StandardModel {}
class SalesDeliveryNoteReject extends StandardModel {}
class SalesDeliveryNoteRequest extends StandardModel {}

SalesDeliveryNote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDeliveryNoteId', DataTypes.BIGINT),
      salesDeliveryNoteCode: DataTypes.STRING(50),
      salesDeliveryNoteCodeTemp: DataTypes.STRING(50),
      salesDeliveryNoteDate: DataTypes.DATEONLY,
      salesOrderId: DataTypes.STRING(500),
      salesOrderCode: DataTypes.STRING(500),
      traceId: DataTypes.STRING(150),
      customerId: DataTypes.INTEGER,
      creditLimit: DataTypes.DOUBLE,
      paymentTermId: DataTypes.BIGINT,
      customerDeliveryId: DataTypes.BIGINT,
      customerDeliveryAddr: DataTypes.TEXT,
      countryId: DataTypes.BIGINT,
      provinceId: DataTypes.BIGINT,
      cityId: DataTypes.BIGINT,
      districtId: DataTypes.BIGINT,
      subdistrictId: DataTypes.BIGINT,
      postalCode: DataTypes.STRING(50),
      sendDate: DataTypes.DATEONLY,
      warehouseId: DataTypes.INTEGER,
      salesmanId: DataTypes.BIGINT,
      shippingId: DataTypes.BIGINT,
      shipping: DataTypes.TEXT,
      shippingNo: DataTypes.STRING(50),
      shippingDate: DataTypes.DATEONLY,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      driver: DataTypes.STRING(50),
      ajuDate: DataTypes.DATE,
      ajuNumber: DataTypes.STRING(50),
      bc16: { type: DataTypes.STRING(150), field: 'bc_16' },
      licensePlate: DataTypes.STRING(50),
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      isvat: DataTypes.INTEGER,
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
  StandardModel.buildStandardModelInformation('tr_sales_delivery_note', 'SalesDeliveryNote', sequelize)
);

SalesDeliveryNoteDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDeliveryNoteDtId', DataTypes.BIGINT),
      salesDeliveryNoteId: DataTypes.BIGINT,
      salesOrderId: DataTypes.BIGINT,
      salesOrderDtId: DataTypes.BIGINT,
      salesOrderCode: DataTypes.STRING(40),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      warehouseId: DataTypes.INTEGER,
      qty: DataTypes.DOUBLE,
      unit: DataTypes.STRING(150),
      qtyOrder: DataTypes.DOUBLE,
      qtyRemain: DataTypes.DOUBLE,
      deliver: DataTypes.STRING(150),
      remain: DataTypes.FLOAT,
      qtyStock: DataTypes.FLOAT,
      qtySdf: DataTypes.FLOAT,
      price: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
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
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_delivery_note_dt', 'SalesDeliveryNoteDt', sequelize)
);

SalesDeliveryNoteItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDeliveryNoteItemDtId', DataTypes.BIGINT),
      salesDeliveryNoteDtId: DataTypes.BIGINT,
      salesDeliveryNoteId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      salesOrderItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyDn: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_delivery_note_item_dt', 'SalesDeliveryNoteItemDt', sequelize)
);

SalesDeliveryNoteReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDeliveryNoteRejectId', DataTypes.BIGINT),
      salesDeliveryNoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_delivery_note_reject', 'SalesDeliveryNoteReject', sequelize)
);

SalesDeliveryNoteRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDeliveryNoteRequestId', DataTypes.BIGINT),
      salesDeliveryNoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_delivery_note_request', 'SalesDeliveryNoteRequest', sequelize)
);

export { SalesDeliveryNote, SalesDeliveryNoteDt, SalesDeliveryNoteItemDt, SalesDeliveryNoteReject, SalesDeliveryNoteRequest };

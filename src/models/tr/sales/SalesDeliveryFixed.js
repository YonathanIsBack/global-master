import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class SalesDeliveryFixed extends StandardModel {}
class SalesDeliveryFixedDt extends StandardModel {}
class SalesDeliveryFixeditemDt extends StandardModel {}
class SalesDeliveryFixedReject extends StandardModel {}
class SalesDeliveryFixedRequest extends StandardModel {}

SalesDeliveryFixed.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDeliveryFixedId', DataTypes.BIGINT),
      salesDeliveryFixedCode: DataTypes.STRING(50),
      salesDeliveryFixedCodeTemp: DataTypes.STRING(50),
      salesDeliveryFixedDate: DataTypes.DATEONLY,
      salesDeliveryNoteId: DataTypes.BIGINT,
      salesDeliveryNoteCode: DataTypes.STRING(50),
      salesOrderId: DataTypes.STRING(50),
      salesOrderCode: DataTypes.STRING(50),
      traceId: DataTypes.STRING(150),
      customerId: DataTypes.INTEGER,
      customerDeliveryId: DataTypes.INTEGER,
      customerDeliveryAddr: DataTypes.TEXT,
      countryId: DataTypes.BIGINT,
      provinceId: DataTypes.BIGINT,
      cityId: DataTypes.BIGINT,
      districtId: DataTypes.BIGINT,
      subdistrictId: DataTypes.BIGINT,
      postalCode: DataTypes.STRING(50),
      deliveryDate: DataTypes.DATEONLY,
      returnDate: DataTypes.DATEONLY,
      warehouseId: DataTypes.INTEGER,
      salesmanId: DataTypes.BIGINT,
      shippingId: DataTypes.BIGINT,
      shipping: DataTypes.TEXT,
      shippingNo: DataTypes.STRING(50),
      shippingDate: DataTypes.DATE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      driver: DataTypes.STRING(50),
      ajuDate: DataTypes.DATEONLY,
      ajuNumber: DataTypes.STRING(50),
      bc16: { type: DataTypes.STRING(150), field: 'bc_16' },
      licensePlate: DataTypes.STRING(15),
      note: DataTypes.TEXT,
      status: DataTypes.INTEGER,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      isvat: DataTypes.TINYINT,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
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
  StandardModel.buildStandardModelInformation('tr_sales_delivery_fixed', 'SalesDeliveryFixed', sequelize)
);

SalesDeliveryFixedDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDeliveryFixedDtId', DataTypes.BIGINT),
      salesDeliveryFixedId: DataTypes.BIGINT,
      salesDeliveryNoteId: DataTypes.BIGINT,
      salesDeliveryNoteDtId: DataTypes.BIGINT,
      salesOrderDtId: DataTypes.BIGINT,
      salesDeliveryNoteCode: DataTypes.STRING(50),
      salesOrderCode: DataTypes.STRING(50),
      itemId: DataTypes.INTEGER,
      itemName: DataTypes.STRING(50),
      itemCode: DataTypes.STRING(150),
      warehouseId: DataTypes.BIGINT,
      qty: DataTypes.FLOAT,
      unit: DataTypes.STRING(150),
      qtyDeliver: DataTypes.DOUBLE,
      return: DataTypes.DOUBLE,
      qtyReceived: DataTypes.DOUBLE,
      qtySi: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.DOUBLE,
      taxAmount: DataTypes.DOUBLE,
      adjInv: DataTypes.DOUBLE,
      adjInvPcs: DataTypes.DOUBLE,
      adjInvType: DataTypes.TINYINT,
      total: DataTypes.DOUBLE,
      totalInv: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_delivery_fixed_dt', 'SalesDeliveryFixedDt', sequelize)
);

SalesDeliveryFixeditemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDeliveryFixedItemDtId', DataTypes.BIGINT),
      salesDeliveryFixedDtId: DataTypes.BIGINT,
      salesDeliveryFixedId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      salesDeliveryNoteItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyDeliver: DataTypes.DOUBLE,
      return: DataTypes.DOUBLE,
      qtyI: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_delivery_fixed_item_dt', 'SalesDeliveryFixeditemDt', sequelize)
);

SalesDeliveryFixedReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDeliveryFixedRejectId', DataTypes.BIGINT),
      salesDeliveryFixedId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_delivery_fixed_reject', 'SalesDeliveryFixedReject', sequelize)
);

SalesDeliveryFixedRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDeliveryFixedRequestId', DataTypes.BIGINT),
      salesDeliveryFixedId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_delivery_fixed_request', 'SalesDeliveryFixedRequest', sequelize)
);

export { SalesDeliveryFixed, SalesDeliveryFixedDt, SalesDeliveryFixeditemDt, SalesDeliveryFixedReject, SalesDeliveryFixedRequest };

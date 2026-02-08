import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class SalesReturn extends StandardModel {}
class SalesReturnCoa extends StandardModel {}
class SalesReturnDirect extends StandardModel {}
class SalesReturnDirectCoa extends StandardModel {}
class SalesReturnDirectDt extends StandardModel {}
class SalesReturnDirectItemDt extends StandardModel {}
class SalesReturnDt extends StandardModel {}
class SalesReturnItemDt extends StandardModel {}
class SalesReturnReject extends StandardModel {}
class SalesReturnRequest extends StandardModel {}

SalesReturn.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesReturnId', DataTypes.BIGINT),
      salesReturnCode: DataTypes.STRING(50),
      salesReturnCodeTemp: DataTypes.STRING(50),
      salesReturnDate: DataTypes.DATE,
      salesOrderId: DataTypes.BIGINT,
      salesOrderCode: DataTypes.STRING(150),
      traceId: DataTypes.STRING(100),
      warehouseId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      salesInvId: DataTypes.BIGINT,
      salesInvCode: DataTypes.BIGINT,
      salesInvDate: DataTypes.DATEONLY,
      salesInvStatus: DataTypes.TINYINT,
      paymentMethod: DataTypes.TINYINT,
      notaDate: DataTypes.DATEONLY,
      nota: DataTypes.STRING(50),
      notes: DataTypes.TEXT,
      coaId: DataTypes.INTEGER,
      vatNo: DataTypes.STRING(200),
      vatDate: DataTypes.DATEONLY,
      isvat: DataTypes.INTEGER,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      discPersen3: DataTypes.FLOAT,
      discAmount3: DataTypes.DOUBLE,
      vatPersen: DataTypes.FLOAT,
      vatAmount: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_return', 'SalesReturn', sequelize)
);

SalesReturnCoa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesReturnCoaId', DataTypes.BIGINT),
      salesReturnId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(100),
      coaName: DataTypes.STRING(100),
      coaSubleadgerId: DataTypes.BIGINT,
      coaSubleadgerCode: DataTypes.STRING(100),
      coaSubleadgerName: DataTypes.STRING(100),
      payment: DataTypes.TINYINT,
      paymentNumber: DataTypes.STRING(50),
      paymentDate: DataTypes.DATE,
      confirmtime: DataTypes.FLOAT,
      confirmby: DataTypes.INTEGER
    },
    { withCreate: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_return_coa', 'SalesReturnCoa', sequelize)
);

SalesReturnDirect.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesReturnDirectId', DataTypes.BIGINT),
      salesReturnDirectCode: DataTypes.BIGINT,
      salesReturnDirectDate: DataTypes.DATE,
      traceId: DataTypes.STRING(150),
      warehouseId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      salesInvCode: DataTypes.STRING(50),
      salesInvDate: DataTypes.DATE,
      notaDate: DataTypes.DATE,
      nota: DataTypes.STRING(50),
      notes: DataTypes.TEXT,
      isvat: DataTypes.INTEGER,
      subtotal: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      discPersen3: DataTypes.FLOAT,
      discAmount3: DataTypes.DOUBLE,
      vatPersen: DataTypes.FLOAT,
      vatAmount: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalT: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_return_direct', 'SalesReturnDirect', sequelize)
);

SalesReturnDirectCoa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesReturnDirectCoaId', DataTypes.BIGINT),
      salesReturnDirectId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(100),
      coaName: DataTypes.STRING(100),
      coaSubleadgerId: DataTypes.BIGINT,
      coaSubleadgerCode: DataTypes.STRING(100),
      coaSubleadgerName: DataTypes.STRING(100),
      payment: DataTypes.TINYINT,
      paymentNumber: DataTypes.STRING(50),
      paymentDate: DataTypes.DATE,
      confirmtime: DataTypes.FLOAT,
      confirmby: DataTypes.INTEGER
    },
    { withCreate: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_return_direct_coa', 'SalesReturnDirectCoa', sequelize)
);

SalesReturnDirectDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesReturnDirectDtId', DataTypes.BIGINT),
      salesReturnDirectId: DataTypes.BIGINT,
      salesInvCode: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      warehouseId: DataTypes.INTEGER,
      qty: DataTypes.DOUBLE,
      unit: DataTypes.STRING(150),
      qtyInv: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      unitPrice: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      isreturn: DataTypes.TINYINT
    },
    { withCreate: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_return_direct_dt', 'SalesReturnDirectDt', sequelize)
);

SalesReturnDirectItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesReturnDirectItemDtId', DataTypes.BIGINT),
      salesReturnDirectDtId: DataTypes.BIGINT,
      salesReturnDirectId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_return_direct_item_dt', 'SalesReturnDirectItemDt', sequelize)
);

SalesReturnDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesReturnDtId', DataTypes.BIGINT),
      salesReturnId: DataTypes.BIGINT,
      salesInvDtId: DataTypes.BIGINT,
      salesInvId: DataTypes.BIGINT,
      salesOrderDtId: DataTypes.BIGINT,
      salesOrderCode: DataTypes.STRING(50),
      salesInvCode: DataTypes.STRING(25),
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      warehouseId: DataTypes.INTEGER,
      qty: DataTypes.DOUBLE,
      unit: DataTypes.STRING(150),
      qtyInv: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      unitPrice: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      vatPersen: DataTypes.FLOAT,
      vatAmount: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      adjInvPcs: DataTypes.DOUBLE,
      adjInv: DataTypes.DOUBLE,
      adjInvType: DataTypes.TINYINT,
      total: DataTypes.DOUBLE,
      isreturn: DataTypes.TINYINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_return_dt', 'SalesReturnDt', sequelize)
);

SalesReturnItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesReturnItemDtId', DataTypes.BIGINT),
      salesReturnDtId: DataTypes.BIGINT,
      salesReturnId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      salesInvItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_return_item_dt', 'SalesReturnItemDt', sequelize)
);

SalesReturnReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesReturnRejectId', DataTypes.BIGINT),
      salesReturnId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_return_reject', 'SalesReturnReject', sequelize)
);

SalesReturnRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesReturnRequestId', DataTypes.BIGINT),
      salesReturnId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_return_request', 'SalesReturnRequest', sequelize)
);
export {
  SalesReturn,
  SalesReturnCoa,
  SalesReturnDirect,
  SalesReturnDirectCoa,
  SalesReturnDirectDt,
  SalesReturnDirectItemDt,
  SalesReturnDt,
  SalesReturnItemDt,
  SalesReturnReject,
  SalesReturnRequest
};

// import { DataTypes } from 'sequelize';
// import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
// import StandardModel from '../../StandardModel.js';
// const sequelize = DatabaseConnectionSingleton.getConnection();

// class SalesInvoice extends StandardModel {}
// class SalesInvoiceAdvance extends StandardModel {}
// class SalesInvoiceDeposit extends StandardModel {}
// class SalesInvoiceDt extends StandardModel {}
// class SalesInvoiceExportLog extends StandardModel {}
// class SalesInvoiceItemDt extends StandardModel {}
// class SalesInvoiceReject extends StandardModel {}
// class SalesInvoiceRequest extends StandardModel {}

// SalesInvoice.init(
//   StandardModel.buildPropertyWithOptions(
//     {
//       ...StandardModel.buildPrimaryKey('salesInvId', DataTypes.BIGINT),
//       salesInvCode: DataTypes.STRING(50),
//       salesInvCodeTemp: DataTypes.STRING(50),
//       noFakturPajakId: DataTypes.INTEGER,
//       noFakturType: DataTypes.STRING(5),
//       salesInvNoFaktur: DataTypes.STRING(100),
//       salesInvDate: DataTypes.DATE,
//       salesDepositId: DataTypes.STRING(250),
//       salesDepositTotal: DataTypes.STRING(250),
//       salesAdvpayId: DataTypes.STRING(250),
//       salesAdvpayCode: DataTypes.STRING(250),
//       salesAdvpayTotal: DataTypes.STRING(250),
//       salesOrderId: DataTypes.STRING(250),
//       salesOrderCode: DataTypes.STRING(250),
//       salesDeliveryFixedId: DataTypes.STRING(250),
//       salesDeliveryFixedCode: DataTypes.STRING(250),
//       traceId: DataTypes.STRING(150),
//       taxNumber: DataTypes.STRING(150),
//       taxDate: DataTypes.DATE,
//       warehouseId: DataTypes.INTEGER,
//       dueDate: DataTypes.DATE,
//       customerId: DataTypes.INTEGER,
//       customerDeliveryId: DataTypes.BIGINT,
//       customerDelivery: DataTypes.TEXT,
//       creditLimit: DataTypes.DOUBLE,
//       paymentTermId: DataTypes.BIGINT,
//       salesmanId: DataTypes.BIGINT,
//       salesDeposit: DataTypes.DOUBLE,
//       customerInvNo: DataTypes.STRING(25),
//       customerInvDate: DataTypes.DATE,
//       customerInTotal: DataTypes.DOUBLE,
//       isvat: DataTypes.INTEGER,
//       driver: DataTypes.STRING(50),
//       vatNo: DataTypes.INTEGER,
//       vatDate: DataTypes.DATE,
//       currencyId: DataTypes.INTEGER,
//       currencyRate: DataTypes.DOUBLE,
//       totalQty: DataTypes.DOUBLE,
//       subtotal: DataTypes.DOUBLE,
//       discPersen: DataTypes.FLOAT,
//       discAmount: DataTypes.DOUBLE,
//       discPersen2: DataTypes.FLOAT,
//       discAmount2: DataTypes.DOUBLE,
//       discPersen3: DataTypes.FLOAT,
//       discAmount3: DataTypes.DOUBLE,
//       taxPersen: DataTypes.FLOAT,
//       taxAmount: DataTypes.DOUBLE,
//       shipping: DataTypes.STRING(150),
//       shippingPrice: DataTypes.DOUBLE,
//       handlingPrice: DataTypes.DOUBLE,
//       paymentCode: DataTypes.STRING(50),
//       dpAmount: DataTypes.DOUBLE,
//       advAmount: DataTypes.DOUBLE,
//       dpReturnAmount: DataTypes.DOUBLE,
//       sisaPay: DataTypes.DOUBLE,
//       total: DataTypes.DOUBLE,
//       grandTotal: DataTypes.DOUBLE,
//       totalCreditCode: DataTypes.DOUBLE,
//       totalPay: DataTypes.DOUBLE,
//       totalReturn: DataTypes.DOUBLE,
//       pphPersen: DataTypes.FLOAT,
//       pphAmount: DataTypes.DOUBLE,
//       status: DataTypes.TINYINT,
//       statusNext: DataTypes.TINYINT,
//       isFinish: DataTypes.TINYINT,
//       note: DataTypes.TEXT,
//       confirmtimeF: DataTypes.DATE,
//       confirmbyF: DataTypes.INTEGER,
//       exportedTax: DataTypes.INTEGER
//     },
//     { withCreate: true, withModify: true }
//   ),
//   StandardModel.buildStandardModelInformation('tr_sales_inv', 'SalesInvoice', sequelize)
// );

// SalesInvoiceAdvance.init(
//   StandardModel.buildPropertyWithOptions(
//     {
//       ...StandardModel.buildPrimaryKey('salesInvAdvpayId', DataTypes.BIGINT),
//       salesInvId: DataTypes.BIGINT,
//       salesAdvpayId: DataTypes.BIGINT,
//       salesAdvpayCode: DataTypes.BIGINT,
//       totalDp: DataTypes.DOUBLE,
//       totalUsed: DataTypes.DOUBLE,
//       remaining: DataTypes.DOUBLE,
//       isorder: DataTypes.TINYINT
//     },
//     {}
//   ),
//   StandardModel.buildStandardModelInformation(
//     'tr_sales_inv_advpay',
//     'SalesInvoiceAdvance',
//     sequelize
//   )
// );

// SalesInvoiceDeposit.init(
//   StandardModel.buildPropertyWithOptions(
//     {
//       ...StandardModel.buildPrimaryKey('salesInvDepositId', DataTypes.BIGINT),
//       salesInvId: DataTypes.BIGINT,
//       salesDepositId: DataTypes.BIGINT,
//       salesDepositCode: DataTypes.BIGINT,
//       deposit: DataTypes.DOUBLE,
//       total: DataTypes.DOUBLE,
//       isorder: DataTypes.DOUBLE
//     },
//     {}
//   ),
//   StandardModel.buildStandardModelInformation(
//     'tr_sales_inv_deposit',
//     'SalesInvoiceDeposit',
//     sequelize
//   )
// );

// SalesInvoiceDt.init(
//   StandardModel.buildPropertyWithOptions(
//     {
//       ...StandardModel.buildPrimaryKey('salesInvDtId', DataTypes.BIGINT),
//       salesInvId: DataTypes.BIGINT,
//       salesDeliveryFixedId: DataTypes.BIGINT,
//       salesDeliveryFixedDtId: DataTypes.BIGINT,
//       salesDeliveryFixed_code: DataTypes.STRING(40),
//       itemId: DataTypes.INTEGER,
//       itemCode: DataTypes.STRING(50),
//       itemName: DataTypes.STRING(150),
//       qty: DataTypes.DOUBLE,
//       unit: DataTypes.STRING(150),
//       qtyOrder: DataTypes.DOUBLE,
//       qtyDeliveryFixed: DataTypes.DOUBLE,
//       qtySp: DataTypes.INTEGER,
//       qtySr: DataTypes.INTEGER,
//       price: DataTypes.DOUBLE,
//       unitPrice: DataTypes.DOUBLE,
//       price2: DataTypes.DOUBLE,
//       priceAvg: DataTypes.DOUBLE,
//       priceFifo: DataTypes.DOUBLE,
//       priceLifo: DataTypes.DOUBLE,
//       discPersen: DataTypes.FLOAT,
//       discAmount: DataTypes.DOUBLE,
//       discPersen2: DataTypes.FLOAT,
//       discAmount2: DataTypes.DOUBLE,
//       disc3: DataTypes.DOUBLE,
//       taxPersen: DataTypes.FLOAT,
//       taxAmount: DataTypes.DOUBLE,
//       total: DataTypes.DOUBLE
//     },
//     {}
//   ),
//   StandardModel.buildStandardModelInformation('tr_sales_inv_dt', 'SalesInvoiceDt', sequelize)
// );

// SalesInvoiceExportLog.init(
//   StandardModel.buildPropertyWithOptions(
//     {
//       ...StandardModel.buildPrimaryKey('exportLogId', DataTypes.BIGINT),
//       salesInvId: DataTypes.BIGINT,
//       username: DataTypes.STRING(150)
//     },
//     { withCreate: true }
//   ),
//   StandardModel.buildStandardModelInformation(
//     'tr_sales_inv_export_log',
//     'SalesInvoiceExportLog',
//     sequelize
//   )
// );

// SalesInvoiceItemDt.init(
//   StandardModel.buildPropertyWithOptions(
//     {
//       ...StandardModel.buildPrimaryKey('salesInvItemDtId', DataTypes.BIGINT),
//       salesInvDtId: DataTypes.BIGINT,
//       salesInvId: DataTypes.BIGINT,
//       itemStockDtId: DataTypes.BIGINT,
//       salesDeliveryFixedItemDtId: DataTypes.BIGINT,
//       itemId: DataTypes.BIGINT,
//       expDay: DataTypes.STRING(11),
//       expMonth: DataTypes.STRING(11),
//       expYear: DataTypes.STRING(11),
//       qty: DataTypes.DOUBLE,
//       qtyR: DataTypes.DOUBLE
//     },
//     {}
//   ),
//   StandardModel.buildStandardModelInformation(
//     'tr_sales_inv_item_dt',
//     'SalesInvoiceItemDt',
//     sequelize
//   )
// );

// SalesInvoiceReject.init(
//   StandardModel.buildPropertyWithOptions(
//     {
//       ...StandardModel.buildPrimaryKey('salesInvRejectId', DataTypes.BIGINT),
//       salesInvId: DataTypes.BIGINT,
//       note: DataTypes.TEXT,
//       userId: DataTypes.BIGINT
//     },
//     { withCreateString: true }
//   ),
//   StandardModel.buildStandardModelInformation(
//     'tr_sales_inv_reject',
//     'SalesInvoiceReject',
//     sequelize
//   )
// );

// SalesInvoiceRequest.init(
//   StandardModel.buildPropertyWithOptions(
//     {
//       ...StandardModel.buildPrimaryKey('salesInvRequestId', DataTypes.BIGINT),
//       salesInvId: DataTypes.BIGINT,
//       note: DataTypes.TEXT,
//       statusRequest: DataTypes.INTEGER,
//       note: DataTypes.TEXT,
//       userId: DataTypes.BIGINT
//     },
//     { withCreateString: true }
//   ),
//   StandardModel.buildStandardModelInformation(
//     'tr_sales_inv_request',
//     'SalesInvoiceRequest',
//     sequelize
//   )
// );

// export {
//   SalesInvoice,
//   SalesInvoiceAdvance,
//   SalesInvoiceDeposit,
//   SalesInvoiceDt,
//   SalesInvoiceExportLog,
//   SalesInvoiceItemDt,
//   SalesInvoiceReject,
//   SalesInvoiceRequest
// };

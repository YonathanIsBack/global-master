import RouteUtil from '../../../util/RouteUtil.js';

const exportSalesInvoiceRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.exportSalesInvoiceController);
const exportSalesInvoiceAdvanceRoute = (controllers) => RouteUtil.createStandardRoute(controllers.exportSalesInvoiceAdvanceController);
const exportSalesInvoiceBc16Route = (controllers) => RouteUtil.createStandardRoute(controllers.exportSalesInvoiceBc16Controller);
const exportSalesInvoiceDtRoute = (controllers) => RouteUtil.createStandardRoute(controllers.exportSalesInvoiceDtController);
const exportSalesInvoiceItemDtRoute = (controllers) => RouteUtil.createStandardRoute(controllers.exportSalesInvoiceItemDtController);
const exportSalesAdvancePaymentRejectRoute = (controllers) => RouteUtil.createStandardRoute(controllers.exportSalesAdvancePaymentRejectController);
const exportSalesAdvancePaymentRequestRoute = (controllers) => RouteUtil.createStandardRoute(controllers.exportSalesAdvancePaymentRequestController);

export {
  exportSalesAdvancePaymentRejectRoute,
  exportSalesAdvancePaymentRequestRoute,
  exportSalesInvoiceAdvanceRoute,
  exportSalesInvoiceBc16Route,
  exportSalesInvoiceDtRoute,
  exportSalesInvoiceItemDtRoute,
  exportSalesInvoiceRoute
};

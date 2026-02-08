import RouteUtil from '../../../util/RouteUtil.js';

const exportSalesAdvancePaymentRoute = (controllers) => RouteUtil.createStandardRoute(controllers.exportSalesAdvancePaymentController);
const exportSalesAdvancePaymentRejectRoute = (controllers) => RouteUtil.createStandardRoute(controllers.exportSalesAdvancePaymentRejectController);
const exportSalesAdvancePaymentRequestRoute = (controllers) => RouteUtil.createStandardRoute(controllers.exportSalesAdvancePaymentRequestController);

export { exportSalesAdvancePaymentRejectRoute, exportSalesAdvancePaymentRequestRoute, exportSalesAdvancePaymentRoute };


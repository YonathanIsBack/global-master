import RouteUtil from '../../../util/RouteUtil.js';

const salesOrderRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.salesOrderController);
const salesOrderAdvanceRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesOrderAdvanceController);
const salesOrderDepositRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesOrderDepositController);
const salesOrderDtRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesOrderDtController);
const salesOrderItemDtRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesOrderItemController);
const salesOrderRejectRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesOrderRejectController);
const salesOrderRequestRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesOrderRequestController);

export {
  salesOrderAdvanceRoute,
  salesOrderDepositRoute,
  salesOrderDtRoute,
  salesOrderItemDtRoute,
  salesOrderRejectRoute,
  salesOrderRequestRoute,
  salesOrderRoute
};

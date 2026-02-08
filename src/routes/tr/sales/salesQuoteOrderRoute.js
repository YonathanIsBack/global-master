import {
  SalesOrder,
  SalesOrderAdvance,
  SalesOrderDeposit,
  SalesOrderDt,
  SalesOrderItemDt,
  SalesOrderReject
} from '../../../models/tr/sales/SalesOrder.js';
import StandardService from '../../../services/StandardService.js';
import RouteUtil from '../../../util/RouteUtil.js';

const salesOrderService = new StandardService(SalesOrder);
const salesOrderAdvanceService = new StandardService(SalesOrderAdvance);
const salesOrderDepositService = new StandardService(SalesOrderDeposit);
const salesOrderDtService = new StandardService(SalesOrderDt);
const salesOrderItemDtService = new StandardService(SalesOrderItemDt);
const salesOrderRejectService = new StandardService(SalesOrderReject);
const salesOrderRequestService = new StandardService(SalesOrderReject);
const salesOrderController = new SalesQuoteController(salesOrderService);
const salesOrderAdvanceController = new SalesQuoteController(salesOrderAdvanceService);
const salesOrderDepositController = new SalesQuoteController(salesOrderDepositService);
const salesOrderDtController = new SalesQuoteDtController(salesOrderDtService);
const salesOrderItemController = new SalesQuoteItemDtController(salesOrderItemDtService);
const salesOrderRejectController = new SalesQuoteRejectController(salesOrderRejectService);
const salesOrderRequestController = new SalesQuoteRequestController(salesOrderRequestService);
const salesOrderRoute = () => RouteUtil.createStandardRoute(salesOrderController);
const salesOrderAdvanceRoute = () => RouteUtil.createStandardRoute(salesOrderAdvanceController);
const salesOrderDepositRoute = () => RouteUtil.createStandardRoute(salesOrderDepositController);
const salesOrderDtRoute = () => RouteUtil.createStandardRoute(salesOrderDtController);
const salesOrderItemDtRoute = () => RouteUtil.createStandardRoute(salesOrderItemController);
const salesOrderRejectRoute = () => RouteUtil.createStandardRoute(salesOrderRejectController);
const salesOrderRequestRoute = () => RouteUtil.createStandardRoute(salesOrderRequestController);

export {
  salesOrderRoute,
  salesOrderAdvanceRoute,
  salesOrderDepositRoute,
  salesOrderDtRoute,
  salesOrderItemDtRoute,
  salesOrderRejectRoute,
  salesOrderRequestRoute
};

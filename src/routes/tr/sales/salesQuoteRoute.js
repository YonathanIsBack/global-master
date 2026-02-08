import RouteUtil from '../../../util/RouteUtil.js';

const salesQuoteRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.salesQuoteController);
const salesQuoteDtRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesQuoteDtController);
const salesQuoteItemDtRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesQuoteItemController);
const salesQuoteRejectRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesQuoteRejectController);
const salesQuoteRequestRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesQuoteRequestController);

export { salesQuoteDtRoute, salesQuoteItemDtRoute, salesQuoteRejectRoute, salesQuoteRequestRoute, salesQuoteRoute };

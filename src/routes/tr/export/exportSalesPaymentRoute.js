import RouteUtil from '../../../util/RouteUtil.js';

const exportSalesPaymentRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.exportSalesPaymentController);

export default exportSalesPaymentRoute;


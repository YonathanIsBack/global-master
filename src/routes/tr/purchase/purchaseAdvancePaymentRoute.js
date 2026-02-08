import RouteUtil from '../../../util/RouteUtil.js';

const purchaseAdvancePaymentRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.purchaseAdvancePaymentController);

export default purchaseAdvancePaymentRoute;

import RouteUtil from '../../../util/RouteUtil.js';

const purchasePaymentRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.purchasePaymentController);

export default purchasePaymentRoute;

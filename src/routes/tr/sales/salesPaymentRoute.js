import RouteUtil from '../../../util/RouteUtil.js';

const salesPaymentRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.salesPaymentController);

export default salesPaymentRoute;


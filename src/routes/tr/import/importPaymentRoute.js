import RouteUtil from '../../../util/RouteUtil.js';

const importPaymentRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.importPaymentController);

export default importPaymentRoute;

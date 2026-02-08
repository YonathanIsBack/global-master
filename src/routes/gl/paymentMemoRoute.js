import RouteUtil from '../../util/RouteUtil.js';

const paymentMemoRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.paymentMemoController);

export default paymentMemoRoute;

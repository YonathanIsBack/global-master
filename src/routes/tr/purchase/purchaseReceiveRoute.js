import RouteUtil from '../../../util/RouteUtil.js';

const purchaseReceiveRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.purchaseReceiveController);

export default purchaseReceiveRoute;

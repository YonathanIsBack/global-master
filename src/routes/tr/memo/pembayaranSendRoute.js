import RouteUtil from '../../../util/RouteUtil.js';

const pembayaranSendRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.pembayaranSendController);

export default pembayaranSendRoute;

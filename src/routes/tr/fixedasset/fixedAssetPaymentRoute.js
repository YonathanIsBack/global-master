import RouteUtil from '../../../util/RouteUtil.js';

const fixedAssetPaymentRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.fixedAssetPaymentController);

export default fixedAssetPaymentRoute;

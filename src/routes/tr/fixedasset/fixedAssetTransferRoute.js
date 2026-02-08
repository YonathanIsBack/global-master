import RouteUtil from '../../../util/RouteUtil.js';

const fixedAssetTransferRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.fixedAssetTransferController);

export default fixedAssetTransferRoute;

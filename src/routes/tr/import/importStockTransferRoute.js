import RouteUtil from '../../../util/RouteUtil.js';

const importStockTransferRoute = (controllers) =>
  RouteUtil.createTransactionRoute(controllers.importStockTransferController);

export default importStockTransferRoute;

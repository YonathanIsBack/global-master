import RouteUtil from '../../../util/RouteUtil.js';

const inventoryTransferRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.inventoryTransferController);

export default inventoryTransferRoute;

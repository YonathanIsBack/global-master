import RouteUtil from '../../../util/RouteUtil.js';

const stockComboRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.stockComboController);
const stockComboReverseRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.stockComboReverseController);

export { stockComboReverseRoute, stockComboRoute };


import RouteUtil from '../../../util/RouteUtil.js';

const exportSalesOrderRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.exportSalesOrderController);

export default exportSalesOrderRoute;


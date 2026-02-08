import RouteUtil from '../../../util/RouteUtil.js';

const importDirectRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.importInvoiceController);

export default importDirectRoute;

import RouteUtil from '../../../util/RouteUtil.js';

const purchaseInvoiceRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.purchaseInvoiceController);

export default purchaseInvoiceRoute;

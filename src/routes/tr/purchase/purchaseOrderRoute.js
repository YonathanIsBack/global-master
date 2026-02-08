import RouteUtil from "../../../util/RouteUtil.js";

const purchaseOrderRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.purchaseOrderController);

export default purchaseOrderRoute;
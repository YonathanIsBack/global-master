import RouteUtil from "../../../util/RouteUtil.js";

const offshorePurchaseOrderRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.offshorePurchaseOrderController);

export default offshorePurchaseOrderRoute;
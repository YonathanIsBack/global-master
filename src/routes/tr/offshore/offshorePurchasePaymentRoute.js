import RouteUtil from "../../../util/RouteUtil.js";

const offshorePurchasePaymentRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.offshorePurchasePaymentController);

export default offshorePurchasePaymentRoute;
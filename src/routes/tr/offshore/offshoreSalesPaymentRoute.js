import RouteUtil from "../../../util/RouteUtil.js";

const offshoreSalesPaymentRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.offshoreSalesPaymentController);

export default offshoreSalesPaymentRoute;
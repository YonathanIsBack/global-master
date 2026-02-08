import RouteUtil from "../../../util/RouteUtil.js";

const purchaseQuoteRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.purchaseQuoteController);

export default purchaseQuoteRoute;
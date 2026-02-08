import Endpoint from "../../../constants/Endpoint.js";
import RouteUtil from "../../../util/RouteUtil.js";

const exportSalesPriceRoute = (controllers) => {
    const { exportSalesPriceController, exportSalesPriceDtController } = controllers;
    const router = RouteUtil.createStandardRoute(exportSalesPriceController);

    router.post(Endpoint.DELETE_ITEM_PRICE, exportSalesPriceDtController.delete);
    return router;
};

export default exportSalesPriceRoute;


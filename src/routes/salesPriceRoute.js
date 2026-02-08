import Endpoint from '../constants/Endpoint.js';
import RouteUtil from '../util/RouteUtil.js';

const salesPriceRoute = (controllers) => {
    const { salesPriceController, salesPriceDetailController } = controllers;
    const router = RouteUtil.createStandardRoute(salesPriceController);
    router.post(Endpoint.DELETE_ITEM_PRICE, salesPriceDetailController.delete)
    return router;
};
const salesPriceDetailRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesPriceDetailController);

export { salesPriceDetailRoute, salesPriceRoute };


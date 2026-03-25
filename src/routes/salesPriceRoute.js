import Endpoint from '../constants/Endpoint.js';
import RouteUtil from '../util/RouteUtil.js';

const salesPriceRoute = (controllers) => {
    const { salesPriceController, salesPriceDetailController } = controllers;

    const router = RouteUtil.createStandardRoute(salesPriceController);
    router.post(Endpoint.DELETE_ITEM_PRICE, salesPriceDetailController.delete);
    
    router.post("/count_all", salesPriceController.count);
    router.post("/get_all_data_selling_price_list_ajax", salesPriceController.getAll);
    router.post("/get_all_data_api", salesPriceController.getAllDataAPI);
    router.post("/get_data_api", salesPriceController.getDataApi);


    return router;
};
const salesPriceDetailRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesPriceDetailController);

export { salesPriceDetailRoute, salesPriceRoute };


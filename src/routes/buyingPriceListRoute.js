import { Router } from 'express';
import { validate } from 'express-validation';
import Endpoint from '../constants/Endpoint.js';
import apiValidator from '../util/apiValidator.js';
import createStandardRoute from './createStandardRoute.js';

const buyingPriceListRoute = (controllers) => {
    const { buyingPriceListController, buyingPriceListDetailController } = controllers;
    const router = createStandardRoute(buyingPriceListController)

    router.post(Endpoint.DELETE_ITEM_PRICE, buyingPriceListDetailController.delete);
    router.post("/count_all", buyingPriceListController.count);
    router.post("/get_all_data_buying_price_list_ajax", buyingPriceListController.getAll);
    router.post("/get_all_data_api", buyingPriceListController.getAllDataAPI);
    router.post("/get_data_api", buyingPriceListController.getDataApi);

    return router;
};
const buyingPriceListDetailRoute = (controllers) => {
    const router = Router();
    const { buyingPriceListDetailController } = controllers;
    const { model } = buyingPriceListDetailController.buyingPriceListDetailService;

    router.post(Endpoint.SAVE, validate(apiValidator(model)), buyingPriceListDetailController.create);
    router.post(Endpoint.DELETE, buyingPriceListDetailController.delete);

    return router;
};

export { buyingPriceListDetailRoute, buyingPriceListRoute };


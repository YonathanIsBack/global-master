import { Router } from 'express';
import { validate } from 'express-validation';
import Endpoint from '../constants/Endpoint.js';
import apiValidator from '../util/apiValidator.js';
import createStandardRoute from './createStandardRoute.js';

const buyingPriceListRoute = (controllers) => {
    const router = createStandardRoute(controllers.buyingPriceListController)
    const { buyingPriceListDetailController } = controllers;

    router.post(Endpoint.DELETE_ITEM_PRICE, buyingPriceListDetailController.delete);

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


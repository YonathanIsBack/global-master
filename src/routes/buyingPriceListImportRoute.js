import Endpoint from '../constants/Endpoint.js';
import createStandardRoute from './createStandardRoute.js';

const buyingPriceListImportRoute = (controllers) => {
    const router = createStandardRoute(controllers.buyingPriceListImportController);
    const { buyingPriceListImportDetailController } = controllers;

    router.post(Endpoint.DELETE_ITEM_PRICE, buyingPriceListImportDetailController.delete);
    
    return router;
};
const buyingPriceListImportDetailRoute = (controllers) => createStandardRoute(controllers.buyingPriceListImportDetailController);

export { buyingPriceListImportDetailRoute, buyingPriceListImportRoute };


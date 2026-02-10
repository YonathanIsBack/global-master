import RouteUtil from '../util/RouteUtil.js';

const shippingRoute = (controllers) => {
    const { shippingController } = controllers;
    const router = RouteUtil.createStandardRoute(shippingController);

    router.post("/count_all", shippingController.count);
    router.post("/get_all_data_shipping_ajax", shippingController.getAll);
    router.post("/get_all_data_api", shippingController.getAllDataAPI);

    return router;
};

export default shippingRoute;

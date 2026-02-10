import RouteUtil from '../util/RouteUtil.js';

const paymentTermRoute = (controllers) => {
    const { paymentController } = controllers;
    const router = RouteUtil.createStandardRoute(paymentController);

    router.post("/count_all", paymentController.count);
    router.post("/get_all_data_term_ajax", paymentController.getAll);
    router.post("/get_all_data_api", paymentController.getAllDataAPI);
    
    return router;
};

export default paymentTermRoute;

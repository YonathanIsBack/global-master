import createStandardRoute from './createStandardRoute.js';

const trPurchaseTargetRoute = (controllers) => {
    const { trPurchaseTargetController } = controllers
    const router = createStandardRoute(trPurchaseTargetController);
    router.post("/count_all", trPurchaseTargetController.count);
    router.post("/get_all_data_buying_target_ajax", trPurchaseTargetController.getAll);
    router.post("/get_all_data_api", trPurchaseTargetController.getAllDataAPI);
    router.post("/get_data_api", trPurchaseTargetController.getDataApi);

    return router;
};
const trPurchaseTargetDetailRoute = (controllers) => createStandardRoute(controllers.trPurchaseTargetDetailController);

export { trPurchaseTargetDetailRoute, trPurchaseTargetRoute };


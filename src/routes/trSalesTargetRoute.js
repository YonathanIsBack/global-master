import RouteUtil from '../util/RouteUtil.js';
import createStandardRoute from './createStandardRoute.js';

const trSalesTargetRoute = (controllers) => {
    const { trSalesTargetController } = controllers;
    const router = RouteUtil.createStandardRoute(trSalesTargetController);
    
    router.post("/count_all", trSalesTargetController.count);
    router.post("/get_all_data_selling_target_ajax", trSalesTargetController.getAll);
    router.post("/get_all_data_api", trSalesTargetController.getAllDataAPI);
    router.post("/get_data_api", trSalesTargetController.getDataApi);

    return router;
};
const trSalesTargetDtRoute = (controllers) => createStandardRoute(controllers.trSalesTargetDtController);

export { trSalesTargetDtRoute, trSalesTargetRoute };

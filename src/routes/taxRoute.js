import RouteUtil from '../util/RouteUtil.js';

const taxRoute = (controllers) => {
    const {taxController} = controllers;
    const router = RouteUtil.createStandardRoute(taxController);

    router.post("/count_all", taxController.count);
    router.post("/get_all_data_tax_ajax", taxController.getAll);
    router.post("/get_all_data_api", taxController.getAllDataAPI);

    return router;
};
const taxFormRoute = (controllers) => RouteUtil.createStandardRoute(controllers.taxFormController);

export { taxFormRoute, taxRoute };


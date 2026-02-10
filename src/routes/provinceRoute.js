import RouteUtil from '../util/RouteUtil.js';

const provinceRoute = (controllers) => {
    const { provinceController } = controllers;
    const router = RouteUtil.createStandardRoute(provinceController);

    router.post("/count_all", provinceController.count);
    router.post("/get_all_data_province_ajax", provinceController.getAll);
    router.post("/get_all_data_api", provinceController.getAllDataAPI);

    return router;
};

export default provinceRoute;

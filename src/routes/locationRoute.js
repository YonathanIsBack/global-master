import RouteUtil from '../util/RouteUtil.js';

const locationRoute = (controllers) => {
    const { locationController } = controllers;
    const router = RouteUtil.createStandardRoute(locationController);

    router.post("/count_all", locationController.count);
    router.post("/get_all_data_location_ajax", locationController.getAll);
    router.post("/get_all_data_api", locationController.getAllDataAPI);

    return router;
};

export default locationRoute;

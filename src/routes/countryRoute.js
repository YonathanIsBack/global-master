import createStandardRoute from './createStandardRoute.js';

const countryRoute = (controllers) => {
    const { countryController } = controllers;
    const router = createStandardRoute(countryController);

    router.post("/count_all", countryController.count);
    router.post("/get_all_data_country_ajax", countryController.getAll);
    router.post("/get_all_data_api", countryController.getAllDataAPI);

    return router;
};
const countryCodeRoute = (controllers) => createStandardRoute(controllers.countryCodeController);

export { countryCodeRoute, countryRoute };


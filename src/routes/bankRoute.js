import createStandardRoute from './createStandardRoute.js';

const bankRoute = (controllers) => {
    const { bankController } = controllers;
    const router = createStandardRoute(bankController);

    router.post("/count_all", bankController.count);
    router.post("/get_all_data_bank_ajax", bankController.getAll);
    router.post("/get_all_data_api", bankController.getAllDataAPI);

    return router;
};

export default bankRoute;

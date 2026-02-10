import RouteUtil from '../util/RouteUtil.js';

const fakturPajakRoute = (controllers) => {
    const { fakturPajakController } = controllers;
    const router = RouteUtil.createStandardRoute(fakturPajakController);

    router.post("/count_all", fakturPajakController.count);
    router.post("/get_all_data_trans_code_tax_ajax", fakturPajakController.getAll);
    router.post("/get_all_data_api", fakturPajakController.getAllDataAPI);

    return router;
};

export default fakturPajakRoute;

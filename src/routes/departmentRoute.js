import { Router } from 'express';
import { validate } from 'express-validation';
import Endpoint from '../constants/Endpoint.js';
import apiValidator from '../util/apiValidator.js';


const departmentRoute = (controllers) => {
    const { departmentController } = controllers
    const router = Router();
    const { model } = departmentController.service;
    const isdelExist = Object.keys(model.getAttributes()).includes('isdel');

    router.post(Endpoint.SAVE, validate(apiValidator(departmentController.service.model)), departmentController.create);
    router.post("/count_all", departmentController.count);
    router.post("/get_all_data_department_ajax", departmentController.getAll);
    router.post("/get_all_data_api", departmentController.getAllDataAPI);

    if (isdelExist) {
        router.post(Endpoint.DELETE, departmentController.delete);
        router.post(Endpoint.RESTORE, departmentController.restore);
    }

    return router;
};

export default departmentRoute;

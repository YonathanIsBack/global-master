import { Router } from 'express';
import { validate } from 'express-validation';
import Endpoint from '../constants/Endpoint.js';
import KasbonPotonganController from '../controllers/KasbonPotonganController.js';
import KasbonPotongan from '../models/KasbonPotongan.js';
import KasbonPotonganService from '../services/ms/KasbonPotonganService.js';
import apiValidator from '../util/apiValidator.js';

const kasbonPotonganService = new KasbonPotonganService(KasbonPotongan);
const kasbonPotonganController = new KasbonPotonganController(kasbonPotonganService);

const kasbonPotonganRoute = () => {
  const router = Router();

  router.post(
    Endpoint.SAVE,
    validate(apiValidator(kasbonPotonganController.service.model)),
    kasbonPotonganController.create
  );
  router.post(Endpoint.DELETE, kasbonPotonganController.delete);
  router.post(Endpoint.RESTORE, kasbonPotonganController.restore);
  router.post('/count_all', kasbonPotonganController.count);
  router.post('/get_all_data_debt_deduction_ajax', kasbonPotonganController.getAll);
  router.post('/get_all_data_api', kasbonPotonganController.getAllDataAPI);
  router.post('/get_data_api', kasbonPotonganController.getAllDataAPI);

  return router;
};

export default kasbonPotonganRoute;

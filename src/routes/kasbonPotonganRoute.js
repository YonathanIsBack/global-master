import { Router } from 'express';
import { validate } from 'express-validation';
import Endpoint from '../constants/Endpoint.js';
import KasbonPotonganController from '../controllers/KasbonPotonganController.js';
import KasbonPotongan from '../models/KasbonPotongan.js';
import StandardService from '../services/StandardService.js';
import apiValidator from '../util/apiValidator.js';

const kasbonPotonganService = new StandardService(KasbonPotongan);
const kasbonPotonganController = new KasbonPotonganController(kasbonPotonganService);

const kasbonPotonganRoute = () => {
    const router = Router();

    router.post(Endpoint.SAVE, validate(apiValidator(kasbonPotonganController.service.model)), kasbonPotonganController.create);
    router.post(Endpoint.DELETE, kasbonPotonganController.delete);
    router.post(Endpoint.RESTORE, kasbonPotonganController.restore);
    
    return router;
};

export default kasbonPotonganRoute;

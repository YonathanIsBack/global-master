import { CountryCodeController, CountryController } from "../controllers/CountryController.js";
import CurrencyController from "../controllers/CurrencyController.js";

const buildAllController = (services) => {
  const controllers = {};

  Object.assign(controllers, { currencyController: new CurrencyController(services.currencyService) });
  Object.assign(controllers, { countryController: new CountryController(services.countryService) });
  Object.assign(controllers, { countryCodeController: new CountryCodeController(services.currencyService) });
};

export default buildAllController;

import { StatusCodes } from 'http-status-codes';
import Constant from '../constants/Constant.js';
import buildResponse from '../util/buildResponse.js';

class LoginController {
  #loginService;
  constructor(loginService) {
    this.#loginService = loginService;
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  async login(request, response) {
    const { body } = request;
    const user = await this.#loginService.login(body);

    return response.status(StatusCodes.OK).json({
      ...buildResponse(StatusCodes.OK, Constant.LOGIN, { user }),
      access_token: user.token
    });
  }

  async register(request, response) {
    const { body } = request;

    if (!this.#isRegisterAuthenticationKeyValid(body.register_authentication_key)) {
      return response
        .status(StatusCodes.FORBIDDEN)
        .json(buildResponse(StatusCodes.FORBIDDEN, 'Register Authentication Key not valid'));
    }

    const user = await this.#loginService.register(body);
    delete user.apiPassword;

    return response.status(StatusCodes.CREATED).json({
      ...buildResponse(StatusCodes.CREATED, Constant.REGISTERED, { user }),
      access_token: user.token
    });
  }

  #isRegisterAuthenticationKeyValid(registerAuthenticationKey) {
    return registerAuthenticationKey === Constant.REGISTER_AUTHENTICATION_KEY;
  }
}

export default LoginController;

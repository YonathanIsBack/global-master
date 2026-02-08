import { StatusCodes } from 'http-status-codes';
import {
  UserAksesCompanyDto,
  UserCustomerDto,
  UserDto,
  UserGroupAccessDto,
  UserGroupCustomerDto,
  UserGroupDto,
  UserItemDto,
  UserOtpDto,
  UserSalesmanDto,
  UserSupplierDto,
  UserTableViewColumnDto,
  UserTurunanDto
} from '../dto/UserDto.js';
import StandardController from './StandardController.js';
import Constant from '../constants/Constant.js';
import buildResponse from '../util/buildResponse.js';

class UserController extends StandardController {
  constructor(userService) {
    super(userService);
    this.create = this.create.bind(this);
    this.insertTransaction = this.insertTransaction.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const userDto = new UserDto(body);

    return await super.create(request, response, userDto);
  }

  async insertTransaction(request, response) {
    const { body } = request;
    const userDto = new UserDto(body);

    return await super.insertTransaction(request, response, userDto);
  }

  async restore(request, response) {
    const { body } = request;
    const userDto = new UserDto(body);

    return await super.restore(request, response, userDto);
  }

  async delete(request, response) {
    const { body } = request;
    const userDto = new UserDto(body);

    return await super.delete(request, response, userDto);
  }
}

class UserAksesCompanyController extends StandardController {
  constructor(userAksesCompanyService) {
    super(userAksesCompanyService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const userAksesCompany = new UserAksesCompanyDto(body);

    return await super.create(request, response, userAksesCompany);
  }

  async restore(request, response) {
    const { body } = request;
    const userAksesCompany = new UserAksesCompanyDto(body);

    return await super.restore(request, response, userAksesCompany);
  }

  async delete(request, response) {
    const { body } = request;
    const userAksesCompany = new UserAksesCompanyDto(body);

    return await super.delete(request, response, userAksesCompany);
  }
}

class UserCustomerController extends StandardController {
  constructor(userCustomerController) {
    super(userCustomerController);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const userCustomer = new UserDto(body);
    const { data, isUpdated, details } = await this.service.createOrUpdate(userCustomer);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const message = isUpdated ? Constant.UPDATED : Constant.CREATED;

    return response
      .status(statusCode)
      .json(buildResponse(statusCode, message, { user_id: data.userId, details }));
  }

  async restore(request, response) {
    const { body } = request;
    const userCustomer = new UserCustomerDto(body);

    return await super.restore(request, response, userCustomer);
  }

  async delete(request, response) {
    const { body } = request;

    const userCustomer = new UserCustomerDto(body);
    const data = await this.service.deleteRow(userCustomer);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

class UserGroupController extends StandardController {
  constructor(userGroupService) {
    super(userGroupService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const userGroup = new UserGroupDto(body);

    return await super.create(request, response, userGroup);
  }

  async restore(request, response) {
    const { body } = request;
    const userGroup = new UserGroupDto(body);

    return await super.restore(request, response, userGroup);
  }

  async delete(request, response) {
    const { body } = request;
    const userGroup = new UserGroupDto(body);

    return await super.delete(request, response, userGroup);
  }
}

class UserGroupAccessController extends StandardController {
  constructor(userGroupAccessService) {
    super(userGroupAccessService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const userGroupAccess = new UserGroupAccessDto(body);

    return await super.create(request, response, userGroupAccess);
  }

  async restore(request, response) {
    const { body } = request;
    const userGroupAccess = new UserGroupAccessDto(body);

    return await super.restore(request, response, userGroupAccess);
  }

  async delete(request, response) {
    const { body } = request;
    const userGroupAccess = new UserGroupAccessDto(body);

    return await super.delete(request, response, userGroupAccess);
  }
}

class UserGroupCustomerController extends StandardController {
  constructor(userGroupCustomerService) {
    super(userGroupCustomerService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const userGroupCustomerDto = new UserGroupCustomerDto(body);

    return await super.create(request, response, userGroupCustomerDto);
  }

  async restore(request, response) {
    const { body } = request;
    const userGroupCustomerDto = new UserGroupCustomerDto(body);

    return await super.restore(request, response, userGroupCustomerDto);
  }

  async delete(request, response) {
    const { body } = request;
    const userGroupCustomerDto = new UserGroupCustomerDto(body);

    return await super.delete(request, response, userGroupCustomerDto);
  }
}

class UserItemController extends StandardController {
  constructor(userItemService) {
    super(userItemService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const userItemDto = new UserDto(body);

    const { data, isUpdated, details } = await this.service.createOrUpdate(userItemDto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const message = isUpdated ? Constant.UPDATED : Constant.CREATED;

    return response
      .status(statusCode)
      .json(buildResponse(statusCode, message, { user_id: data.userId, details }));
  }

  async restore(request, response) {
    const { body } = request;
    const userItemDto = new UserItemDto(body);

    return await super.restore(request, response, userItemDto);
  }

  async delete(request, response) {
    const { body } = request;
    const userItemDto = new UserItemDto(body);
    const data = await this.service.deleteRow(userItemDto);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

class UserOtpController extends StandardController {
  constructor(userOtpService) {
    super(userOtpService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const userOtpDto = new UserOtpDto(body);

    return await super.create(request, response, userOtpDto);
  }

  async restore(request, response) {
    const { body } = request;
    const userOtpDto = new UserOtpDto(body);

    return await super.restore(request, response, userOtpDto);
  }

  async delete(request, response) {
    const { body } = request;
    const userOtpDto = new UserOtpDto(body);

    return await super.delete(request, response, userOtpDto);
  }
}

class UserSalesmanController extends StandardController {
  constructor(userSalesmanService) {
    super(userSalesmanService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const userSalesmanDto = new UserDto(body);

    const { data, isUpdated, details } = await this.service.createOrUpdate(userSalesmanDto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const message = isUpdated ? Constant.UPDATED : Constant.CREATED;

    return response
      .status(statusCode)
      .json(buildResponse(statusCode, message, { user_id: data.userId, details }));
  }

  async restore(request, response) {
    const { body } = request;
    const userSalesmanDto = new UserSalesmanDto(body);

    return await super.restore(request, response, userSalesmanDto);
  }

  async delete(request, response) {
    const { body } = request;

    const userSalesmanDto = new UserSalesmanDto(body);
    const data = await this.service.deleteRow(userSalesmanDto);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

class UserSupplierController extends StandardController {
  constructor(userSupplierService) {
    super(userSupplierService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const userSupplierDto = new UserDto(body);
    const { data, isUpdated, details } = await this.service.createOrUpdate(userSupplierDto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const message = isUpdated ? Constant.UPDATED : Constant.CREATED;

    return response
      .status(statusCode)
      .json(buildResponse(statusCode, message, { user_id: data.userId, details }));
  }

  async restore(request, response) {
    const { body } = request;
    const userSupplierDto = new UserSupplierDto(body);

    return await super.restore(request, response, userSupplierDto);
  }

  async delete(request, response) {
    const { body } = request;
    const userSupplier = new UserSupplierDto(body);
    const data = await this.service.deleteRow(userSupplier);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

class UserTableViewColumnController extends StandardController {
  constructor(userTableViewColumnService) {
    super(userTableViewColumnService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const userTableViewColumnDto = new UserTableViewColumnDto(body);

    return await super.create(request, response, userTableViewColumnDto);
  }

  async restore(request, response) {
    const { body } = request;
    const userTableViewColumnDto = new UserTableViewColumnDto(body);

    return await super.restore(request, response, userTableViewColumnDto);
  }

  async delete(request, response) {
    const { body } = request;
    const userTableViewColumnDto = new UserTableViewColumnDto(body);

    return await super.delete(request, response, userTableViewColumnDto);
  }
}

class UserTurunanController extends StandardController {
  constructor(userTurunanService) {
    super(userTurunanService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const userTurunanDto = new UserDto(body);
    const { data, isUpdated, details } = await this.service.createOrUpdate(userTurunanDto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const message = isUpdated ? Constant.UPDATED : Constant.CREATED;

    return response
      .status(statusCode)
      .json(buildResponse(statusCode, message, { user_id: data.userId, details }));
  }

  async restore(request, response) {
    const { body } = request;
    const userTurunanDto = new UserTurunanDto(body);

    return await super.restore(request, response, userTurunanDto);
  }

  async delete(request, response) {
    const { body } = request;
    const userTurunanDto = new UserTurunanDto(body);
    const data = await this.service.deleteRow(userTurunanDto);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

export {
  UserAksesCompanyController,
  UserController,
  UserCustomerController,
  UserGroupAccessController,
  UserGroupController,
  UserGroupCustomerController,
  UserItemController,
  UserOtpController,
  UserSalesmanController,
  UserSupplierController,
  UserTableViewColumnController,
  UserTurunanController
};

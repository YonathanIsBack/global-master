import { StatusCodes } from 'http-status-codes';
import { BackDatedDto, BackDatedLogsDto, BackDatedUserDto } from '../dto/BackdatedDto.js';
import { BackDatedUser } from '../models/Backdated.js';
import ObjectUtil from '../util/ObjectUtil.js';
import StandardController from './StandardController.js';
import buildResponse from '../util/buildResponse.js';

class BackdatedController extends StandardController {
  constructor(backdatedService) {
    super(backdatedService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const backdatedDto = new BackDatedDto(body);

    return await super.insertTransaction(request, response, backdatedDto);
  }

  async restore(request, response) {
    const { body } = request;
    const backdatedDto = new BackDatedDto(body);

    return await super.restore(request, response, backdatedDto);
  }

  async delete(request, response) {
    const { body } = request;
    const backdatedDto = new BackDatedDto(body);

    return await super.delete(request, response, backdatedDto);
  }
  
  async getAllDataAPI(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = { [primaryKey]: requestBody.where_in };
    const include = [
      {
        model: BackDatedUser,
        required: false
      }
    ];

    const datas = await this.service.getAll({ whereClause, limit: requestBody.where_in.length, include, raw: false, nest: true });
    console.log(datas);

    const payload = {
      result: datas.map((data) => {
        return {
          ...ObjectUtil.toSnakeCase(data.get({ plain: true })),
          st_backdated_user:
            data.get({ plain: true }).BackDatedUsers == null
              ? []
              : data.get({ plain: true }).BackDatedUsers.map((backDatedUser) => ({
                  ...ObjectUtil.toSnakeCase(backDatedUser)
                }))
        };
      }),
      total_rows: datas.length
    };

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', payload));
  }

  async getDataApi(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = {
      [primaryKey]: requestBody.id
    };
    const include = [
      {
        model: BackDatedUser,
        required: false
      }
    ];

    const data = await this.service.getOne({ whereClause, include });
    let payload = {};

    if (data != null) {
      const plainData = data.get({ plain: true });
      const BackDatedUsers = plainData.BackDatedUsers.map((BackDatedUser) =>
        ObjectUtil.toSnakeCase(BackDatedUser)
      );
      delete plainData.BackDatedUsers;

      Object.assign(payload, ObjectUtil.toSnakeCase(plainData));
      payload.st_backdated_user = BackDatedUsers;
    }

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', ObjectUtil.toSnakeCase(payload)));
  }
}

class BackdatedLogsController extends StandardController {
  constructor(backdatedLogsService) {
    super(backdatedLogsService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const backdatedLogsDto = new BackDatedLogsDto(body);

    return await super.create(request, response, backdatedLogsDto);
  }

  async restore(request, response) {
    const { body } = request;
    const backdatedLogsDto = new BackDatedLogsDto(body);

    return await super.restore(request, response, backdatedLogsDto);
  }

  async delete(request, response) {
    const { body } = request;
    const backdatedLogsDto = new BackDatedLogsDto(body);

    return await super.delete(request, response, backdatedLogsDto);
  }
}

class BackdatedUserController extends StandardController {
  constructor(backdatedUserService) {
    super(backdatedUserService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const backdatedUserDto = new BackDatedUserDto(body);

    return await super.create(request, response, backdatedUserDto);
  }

  async restore(request, response) {
    const { body } = request;
    const backdatedUserDto = new BackDatedUserDto(body);

    return await super.restore(request, response, backdatedUserDto);
  }

  async delete(request, response) {
    const { body } = request;
    const backdatedUserDto = new BackDatedUserDto(body);

    return await super.delete(request, response, backdatedUserDto);
  }
}

export { BackdatedController, BackdatedLogsController, BackdatedUserController };

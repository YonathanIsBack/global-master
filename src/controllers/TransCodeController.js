import {
  NoTransactionDto,
  TransactionCodeDto,
  TransCodeDto,
  TransCodeGroupDto
} from '../dto/TransCodeDto.js';
import StandardController from './StandardController.js';

class TransCodeController extends StandardController {
  constructor(transCodeService) {
    super(transCodeService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const transCodeDto = new TransCodeDto(body);

    return await super.create(request, response, transCodeDto);
  }

  async restore(request, response) {
    const { body } = request;
    const transCodeDto = new TransCodeDto(body);

    return await super.restore(request, response, transCodeDto);
  }

  async delete(request, response) {
    const { body } = request;
    const transCodeDto = new TransCodeDto(body);

    return await super.delete(request, response, transCodeDto);
  }
}

class TransCodeGroupController extends StandardController {
  constructor(transCodeGroupService) {
    super(transCodeGroupService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const transCodeGroupDto = new TransCodeGroupDto(body);

    return await super.create(request, response, transCodeGroupDto);
  }

  async restore(request, response) {
    const { body } = request;
    const transCodeGroupDto = new TransCodeGroupDto(body);

    return await super.restore(request, response, transCodeGroupDto);
  }

  async delete(request, response) {
    const { body } = request;
    const transCodeGroupDto = new TransCodeGroupDto(body);

    return await super.delete(request, response, transCodeGroupDto);
  }
}

class TransactionCodeController extends StandardController {
  constructor(transCodeGroupService) {
    super(transCodeGroupService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const transactionCodeDto = new TransactionCodeDto(body);

    return await super.create(request, response, transactionCodeDto);
  }

  async restore(request, response) {
    const { body } = request;
    const transactionCodeDto = new TransactionCodeDto(body);

    return await super.restore(request, response, transactionCodeDto);
  }

  async delete(request, response) {
    const { body } = request;
    const transactionCodeDto = new TransactionCodeDto(body);

    return await super.delete(request, response, transactionCodeDto);
  }
}

class NoTransactionController extends StandardController {
  constructor(NoTransactionService) {
    super(NoTransactionService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const noTransactionDto = new NoTransactionDto(body);

    return await super.create(request, response, noTransactionDto);
  }

  async restore(request, response) {
    const { body } = request;
    const noTransactionDto = new NoTransactionDto(body);

    return await super.restore(request, response, noTransactionDto);
  }

  async delete(request, response) {
    const { body } = request;
    const noTransactionDto = new NoTransactionDto(body);

    return await super.delete(request, response, noTransactionDto);
  }
}

export {
  TransactionCodeController,
  TransCodeController,
  TransCodeGroupController,
  NoTransactionController
};

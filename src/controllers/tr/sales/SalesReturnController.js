import {
  SalesReturnCoaDto,
  SalesReturnDirectCoaDto,
  SalesReturnDirectDtDto,
  SalesReturnDirectDto,
  SalesReturnDirectItemDtDto,
  SalesReturnDtDto,
  SalesReturnDto,
  SalesReturnItemDtDto,
  SalesReturnRejectDto,
  SalesReturnRequestDto
} from '../../../dto/tr/sales/SalesReturnDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class SalesReturnController extends StandardTransactionController {
  constructor(salesReturn) {
    super(salesReturn);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesReturnDto = new SalesReturnDto(body);

    return await super.insertTransaction(request, response, salesReturnDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesReturnDto = new SalesReturnDto(body);

    return await super.restore(request, response, salesReturnDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesReturnDto = new SalesReturnDto(body);

    return await super.delete(request, response, salesReturnDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const salesReturnDto = new SalesReturnDto(body);

    return await super.changeStatus(request, response, salesReturnDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const salesReturnDto = new SalesReturnDto(body);

    return await super.changeStatusRequest(request, response, salesReturnDto);
  }
}

class SalesReturnCoaController extends StandardController {
  constructor(salesReturnCoa) {
    super(salesReturnCoa);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesReturnCoaDto = new SalesReturnCoaDto(body);

    return await super.create(request, response, salesReturnCoaDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesReturnCoaDto = new SalesReturnCoaDto(body);

    return await super.restore(request, response, salesReturnCoaDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesReturnCoaDto = new SalesReturnCoaDto(body);

    return await super.delete(request, response, salesReturnCoaDto);
  }
}
class SalesReturnDirectController extends StandardController {
  constructor(salesReturnDirect) {
    super(salesReturnDirect);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesReturnDirectDto = new SalesReturnDirectDto(body);

    return await super.create(request, response, salesReturnDirectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesReturnDirectDto = new SalesReturnDirectDto(body);

    return await super.restore(request, response, salesReturnDirectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesReturnDirectDto = new SalesReturnDirectDto(body);

    return await super.delete(request, response, salesReturnDirectDto);
  }
}
class SalesReturnDirectCoaController extends StandardController {
  constructor(salesReturnDirectCoa) {
    super(salesReturnDirectCoa);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesReturnDirectCoaDto = new SalesReturnDirectCoaDto(body);

    return await super.create(request, response, salesReturnDirectCoaDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesReturnDirectCoaDto = new SalesReturnDirectCoaDto(body);

    return await super.restore(request, response, salesReturnDirectCoaDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesReturnDirectCoaDto = new SalesReturnDirectCoaDto(body);

    return await super.delete(request, response, salesReturnDirectCoaDto);
  }
}
class SalesReturnDirectDtController extends StandardController {
  constructor(salesReturnDirectDt) {
    super(salesReturnDirectDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesReturnDirectDtDto = new SalesReturnDirectDtDto(body);

    return await super.create(request, response, salesReturnDirectDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesReturnDirectDtDto = new SalesReturnDirectDtDto(body);

    return await super.restore(request, response, salesReturnDirectDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesReturnDirectDtDto = new SalesReturnDirectDtDto(body);

    return await super.delete(request, response, salesReturnDirectDtDto);
  }
}
class SalesReturnDirectItemDtController extends StandardController {
  constructor(salesReturnDirectItemDt) {
    super(salesReturnDirectItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesReturnDirectItemDtDto = new SalesReturnDirectItemDtDto(body);

    return await super.create(request, response, salesReturnDirectItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesReturnDirectItemDtDto = new SalesReturnDirectItemDtDto(body);

    return await super.restore(request, response, salesReturnDirectItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesReturnDirectItemDtDto = new SalesReturnDirectItemDtDto(body);

    return await super.delete(request, response, salesReturnDirectItemDtDto);
  }
}
class SalesReturnDtController extends StandardController {
  constructor(salesReturnDt) {
    super(salesReturnDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesReturnDtDto = new SalesReturnDtDto(body);

    return await super.create(request, response, salesReturnDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesReturnDtDto = new SalesReturnDtDto(body);

    return await super.restore(request, response, salesReturnDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesReturnDtDto = new SalesReturnDtDto(body);

    return await super.delete(request, response, salesReturnDtDto);
  }
}

class SalesReturnItemDtController extends StandardController {
  constructor(salesReturnItemDt) {
    super(salesReturnItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesReturnItemDtDto = new SalesReturnItemDtDto(body);

    return await super.create(request, response, salesReturnItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesReturnItemDtDto = new SalesReturnItemDtDto(body);

    return await super.restore(request, response, salesReturnItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesReturnItemDtDto = new SalesReturnItemDtDto(body);

    return await super.delete(request, response, salesReturnItemDtDto);
  }
}

class SalesReturnRejectController extends StandardController {
  constructor(salesReturnReject) {
    super(salesReturnReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesReturnRejectDto = new SalesReturnRejectDto(body);

    return await super.create(request, response, salesReturnRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesReturnRejectDto = new SalesReturnRejectDto(body);

    return await super.restore(request, response, salesReturnRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesReturnRejectDto = new SalesReturnRejectDto(body);

    return await super.delete(request, response, salesReturnRejectDto);
  }
}

class SalesReturnRequestController extends StandardController {
  constructor(salesReturnRequest) {
    super(salesReturnRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesReturnRequestDto = new SalesReturnRequestDto(body);

    return await super.create(request, response, salesReturnRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesReturnRequestDto = new SalesReturnRequestDto(body);

    return await super.restore(request, response, salesReturnRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesReturnRequestDto = new SalesReturnRequestDto(body);

    return await super.delete(request, response, salesReturnRequestDto);
  }
}

export {
  SalesReturnController,
  SalesReturnCoaController,
  SalesReturnDirectController,
  SalesReturnDirectCoaController,
  SalesReturnDirectDtController,
  SalesReturnItemDtController,
  SalesReturnDtController,
  SalesReturnDirectItemDtController,
  SalesReturnRejectController,
  SalesReturnRequestController
};

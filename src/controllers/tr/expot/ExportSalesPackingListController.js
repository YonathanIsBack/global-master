import {
  ExportSalesPackingListBc16Dto,
  ExportSalesPackingListDtDto,
  ExportSalesPackingListDto,
  ExportSalesPackingListItemDtDto,
  ExportSalesPackingListRejectDto,
  ExportSalesPackingListRequestDto
} from '../../../dto/tr/export/ExportSalesPackingListDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ExportSalesPackingListController extends StandardTransactionController {
  constructor(exportSalesPackingList) {
    super(exportSalesPackingList);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPackingListDto = new ExportSalesPackingListDto(body);

    return await super.insertTransaction(request, response, this.#handleExportSalesPackingListBc16PrimaryKey(exportSalesPackingListDto));
  }

  #handleExportSalesPackingListBc16PrimaryKey(exportSalesPackingListDto) {
    const { detailsData } = exportSalesPackingListDto;

    if (detailsData.tr_export_sales_packing_list_bc16 == null) {
      return exportSalesPackingListDto;
    }

    detailsData.tr_export_sales_packing_list_bc16 = detailsData.tr_export_sales_packing_list_bc16.map((data) => {
      return {
        ...data,
        export_sales_packing_list_bc_16_id: data.export_sales_packing_list_bc16_id
      };
    });

    return exportSalesPackingListDto;
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPackingListDto = new ExportSalesPackingListDto(body);

    return await super.restore(request, response, exportSalesPackingListDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPackingListDto = new ExportSalesPackingListDto(body);

    return await super.delete(request, response, exportSalesPackingListDto);
  }
  
  async changeStatus(request, response) {
    const {body} = request;
    const exportSalesPackingListDto = new ExportSalesPackingListDto(body);

    return await super.changeStatus(request, response, exportSalesPackingListDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const exportSalesPackingListDto = new ExportSalesPackingListDto(body);

    return await super.changeStatusRequest(request, response, exportSalesPackingListDto);
  }
}

class ExportSalesPackingListBc16Controller extends StandardController {
  constructor(exportSalesPackingListBc16) {
    super(exportSalesPackingListBc16);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPackingListBc16Dto = new ExportSalesPackingListBc16Dto(body);

    return await super.create(request, response, exportSalesPackingListBc16Dto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPackingListBc16Dto = new ExportSalesPackingListBc16Dto(body);

    return await super.restore(request, response, exportSalesPackingListBc16Dto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPackingListBc16Dto = new ExportSalesPackingListBc16Dto(body);

    return await super.delete(request, response, exportSalesPackingListBc16Dto);
  }
}

class ExportSalesPackingListDtController extends StandardController {
  constructor(exportSalesPackingListDt) {
    super(exportSalesPackingListDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPackingListDto = new ExportSalesPackingListDtDto(body);

    return await super.create(request, response, exportSalesPackingListDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPackingListDto = new ExportSalesPackingListDtDto(body);

    return await super.restore(request, response, exportSalesPackingListDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPackingListDto = new ExportSalesPackingListDtDto(body);

    return await super.delete(request, response, exportSalesPackingListDto);
  }
}

class ExportSalesPackingListItemDtController extends StandardController {
  constructor(exportSalesPackingListItemDt) {
    super(exportSalesPackingListItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPackingListItemDtDto = new ExportSalesPackingListItemDtDto(body);

    return await super.create(request, response, exportSalesPackingListItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPackingListItemDtDto = new ExportSalesPackingListItemDtDto(body);

    return await super.restore(request, response, exportSalesPackingListItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPackingListItemDtDto = new ExportSalesPackingListItemDtDto(body);

    return await super.delete(request, response, exportSalesPackingListItemDtDto);
  }
}

class ExportSalesPackingListRejectController extends StandardController {
  constructor(exportSalesPackingListReject) {
    super(exportSalesPackingListReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPackingListRejectDto = new ExportSalesPackingListRejectDto(body);

    return await super.create(request, response, exportSalesPackingListRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPackingListRejectDto = new ExportSalesPackingListRejectDto(body);

    return await super.restore(request, response, exportSalesPackingListRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPackingListRejectDto = new ExportSalesPackingListRejectDto(body);

    return await super.delete(request, response, exportSalesPackingListRejectDto);
  }
}

class ExportSalesPackingListRequestController extends StandardController {
  constructor(exportSalesPackingListRequest) {
    super(exportSalesPackingListRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPackingListRequestDto = new ExportSalesPackingListRequestDto(body);

    return await super.create(request, response, exportSalesPackingListRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPackingListRequestDto = new ExportSalesPackingListRequestDto(body);

    return await super.restore(request, response, exportSalesPackingListRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPackingListRequestDto = new ExportSalesPackingListRequestDto(body);

    return await super.delete(request, response, exportSalesPackingListRequestDto);
  }
}

export {
  ExportSalesPackingListBc16Controller, ExportSalesPackingListController, ExportSalesPackingListDtDto,
  ExportSalesPackingListItemDtController,
  ExportSalesPackingListRejectController,
  ExportSalesPackingListRequestController
};


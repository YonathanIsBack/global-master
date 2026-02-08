import StandardTransactionService from "../../StandardTransactionService.js";

class StockOpnameService extends StandardTransactionService {
  constructor(model) {
    super(model);
  }

  async opnameProcess(stockOpnameDto, { transaction, retry, isDeleteDetail } = this.defaultOptions) {
    if (transaction == null) {
      return this.withTransaction(this.opnameProcess, stockOpnameDto, retry);
    }

    const existingData = await this.model.findByPk(this.getPrimaryKeyValue(stockOpnameDto), { lock: transaction.LOCK.UPDATE, transaction });
    const requestData = stockOpnameDto.toModel();
    const { detailsData, logTransaksi } = stockOpnameDto;

    this.upsertLogTransaksi(logTransaksi, transaction);

    if (existingData === undefined || existingData === null) {
      const newHeaderData = await this.insert(requestData, transaction);
      const newDetailsData = await this.upsertDetails(detailsData, transaction, isDeleteDetail);

      return { data: newHeaderData.dataValues, isUpdated: false, details: newDetailsData };
    }

    const updatedHeaderData = await this.update(requestData, transaction);
    const updatedDetailsData = await this.upsertDetails(detailsData, transaction, isDeleteDetail);

    return { data: updatedHeaderData.dataValues, isUpdated: true, details: updatedDetailsData };
  }
}

export default StockOpnameService;


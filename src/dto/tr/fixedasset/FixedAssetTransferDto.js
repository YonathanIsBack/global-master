import StandardDto from '../../StandardDto.js';

class FixedAssetTransferDto extends StandardDto {
  #fixedAssetTransferId;
  #fixedAssetTransferCode;
  #fixedAssetTransferCodeTemp;
  #fixedAssetTransferDate;
  #note;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(request) {
    super(request);
    this.#fixedAssetTransferId = request.fixed_asset_transfer_id;
    this.#fixedAssetTransferCode = request.fixed_asset_transfer_code;
    this.#fixedAssetTransferCodeTemp = request.fixed_asset_transfer_code_temp;
    this.#fixedAssetTransferDate = request.fixed_asset_transfer_date;
    this.#note = request.note;
    this.#status = request.status;
    this.#statusNext = request.status_next;
    this.#confirmtime = request.confirmtime;
    this.#confirmby = request.confirmby;
    this.#confirmtimeF = request.confirmtime_f;
    this.#confirmbyF = request.confirmby_f;
  }

  get fixedAssetTransferId() {
    return this.#fixedAssetTransferId;
  }

  toModel() {
    return {
      fixedAssetTransferId: this.#fixedAssetTransferId,
      fixedAssetTransferCode: this.#fixedAssetTransferCode,
      fixedAssetTransferCodeTemp: this.#fixedAssetTransferCodeTemp,
      fixedAssetTransferDate: this.#fixedAssetTransferDate,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

export default FixedAssetTransferDto;

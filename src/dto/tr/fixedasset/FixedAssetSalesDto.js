import StandardDto from '../../StandardDto.js';

class FixedAssetSalesDto extends StandardDto {
  #fixedAssetSalesId;
  #fixedAssetSalesCode;
  #fixedAssetSalesCodeTemp;
  #fixedAssetSalesDate;
  #note;
  #departementId;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(request) {
    super(request);
    this.#fixedAssetSalesId = request.fixed_asset_sales_id;
    this.#fixedAssetSalesCode = request.fixed_asset_sales_code;
    this.#fixedAssetSalesCodeTemp = request.fixed_asset_sales_code_temp;
    this.#fixedAssetSalesDate = request.fixed_asset_sales_date;
    this.#note = request.note;
    this.#departementId = request.departement_id;
    this.#status = request.status;
    this.#statusNext = request.status_next;
    this.#confirmtime = request.confirmtime;
    this.#confirmby = request.confirmby;
    this.#confirmtimeF = request.confirmtime_f;
    this.#confirmbyF = request.confirmby_f;
  }

  get fixedAssetSalesId() {
    return this.#fixedAssetSalesId;
  }

  toModel() {
    return {
      fixedAssetSalesId: this.#fixedAssetSalesId,
      fixedAssetSalesCode: this.#fixedAssetSalesCode,
      fixedAssetSalesCodeTemp: this.#fixedAssetSalesCodeTemp,
      fixedAssetSalesDate: this.#fixedAssetSalesDate,
      note: this.#note,
      departementId: this.#departementId,
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

export default FixedAssetSalesDto;

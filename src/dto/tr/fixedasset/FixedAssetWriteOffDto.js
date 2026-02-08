import StandardDto from '../../StandardDto.js';

class FixedAssetWriteOffDto extends StandardDto {
  fixedAssetWriteOffId;
  #fixedAssetWriteOffCode;
  #fixedAssetWriteOffCodeTemp;
  #fixedAssetWriteOffDate;
  #note;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(request) {
    super(request);
    this.fixedAssetWriteOffId = request.fixed_asset_write_off_id;
    this.#fixedAssetWriteOffCode = request.fixed_asset_write_off_code;
    this.#fixedAssetWriteOffCodeTemp = request.fixed_asset_write_off_code_temp;
    this.#fixedAssetWriteOffDate = request.fixed_asset_write_off_date;
    this.#note = request.note;
    this.#status = request.status;
    this.#statusNext = request.status_next;
    this.#confirmtime = request.confirmtime;
    this.#confirmby = request.confirmby;
    this.#confirmtimeF = request.confirmtime_f;
    this.#confirmbyF = request.confirmby_f;
  }

  get fixedAssetWriteOffId() {
    return this.fixedAssetWriteOffId;
  }

  toModel() {
    return {
      fixedAssetWriteOffId: this.fixedAssetWriteOffId,
      fixedAssetWriteOffCode: this.#fixedAssetWriteOffCode,
      fixedAssetWriteOffCodeTemp: this.#fixedAssetWriteOffCodeTemp,
      fixedAssetWriteOffDate: this.#fixedAssetWriteOffDate,
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

export default FixedAssetWriteOffDto;

import StandardDto from "./StandardDto.js";

class StCurrencyRateDto extends StandardDto{
  #currencyRateId;
  #publishDate;
  #currencyRateName;
  #note;
  #isDel;
  #cretime;
  #creby;
  #modTime;
  #modBy;

  constructor(dto) {
    super(dto);
    this.#currencyRateId = dto.currency_rate_id;
    this.#publishDate = dto.publish_date;
    this.#currencyRateName = dto.currency_rate_name;
    this.#note = dto.note;
    this.#isDel = dto.isdel;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
    this.#modTime = dto.modtime;
    this.#modBy = dto.modby;
  }

  get currencyRateId() {
    return this.#currencyRateId;
  }

  toModel() {
    return {
      currencyRateId: this.#currencyRateId,
      publishDate: this.#publishDate,
      currencyRateName: this.#currencyRateName,
      note: this.#note,
      isdel: this.#isDel,
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modTime,
      modby: this.#modBy,
      ...super.toModel()
    };
  }
}

export default StCurrencyRateDto;

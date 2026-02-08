import StandardDto from './StandardDto.js';

class StCurrencyDetailDto extends StandardDto {
  #currencyRateDtId;
  #currencyRateId;
  #currencyId;
  #rate;

  constructor(dto) {
    super(dto);
    this.#currencyRateDtId = dto.currency_rate_dt_id;
    this.#currencyRateId = dto.currency_rate_id;
    this.#currencyId = dto.currency_id;
    this.#rate = dto.rate;
  }

  get currencyRateDtId() {
    return this.#currencyRateDtId;
  }

  toModel() {
    return {
      currencyRateDtId: this.#currencyRateDtId,
      currencyRateId: this.#currencyRateId,
      currencyId: this.#currencyId,
      rate: this.#rate,
      ...super.toModel()
    };
  }
}

export default StCurrencyDetailDto;

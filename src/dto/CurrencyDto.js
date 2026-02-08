import StandardDto from './StandardDto.js';

class CurrencyDto extends StandardDto {
  #currencyId;
  #companyParentId;
  #currencyCode;
  #currencyName;
  #currencySymbol;
  #countryId;
  #kursLocal;
  #kurs;
  #syncType;
  #syncTime;

  constructor(dto) {
    super(dto);
    this.#currencyId = dto.currency_id;
    this.#companyParentId = dto.company_parent_id;
    this.#currencyCode = dto.currency_code;
    this.#currencyName = dto.currency_name;
    this.#currencySymbol = dto.currency_symbol;
    this.#countryId = dto.country_id;
    this.#kursLocal = dto.kurs_local;
    this.#syncType = dto.sync_type;
    this.#syncTime = dto.sync_time;
    this.#kurs = dto.kurs;
  }

  get currencyId() {
    return this.#currencyId;
  }

  toModel() {
    return {
      currencyId: this.#currencyId,
      companyParentId: this.#companyParentId,
      currencyCode: this.#currencyCode,
      currencyName: this.#currencyName,
      currencySymbol: this.#currencySymbol,
      countryId: this.#countryId,
      kursLocal: this.#kursLocal,
      kurs: this.#kurs,
      syncType: this.#syncType,
      syncTime: this.#syncTime,
      ...super.toModel()
    };
  }
}

export default CurrencyDto;

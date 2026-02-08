import StandardDto from './StandardDto.js';

class CountryDto extends StandardDto {
  #countryId;
  #coretaxCountryId;
  #rajaOngkirId;
  #countryCode;
  #countryName;

  constructor(dto) {
    super(dto);
    this.#countryId = dto.country_id;
    this.#coretaxCountryId = dto.coretax_country_id;
    this.#rajaOngkirId = dto.raja_ongkir_id;
    this.#countryCode = dto.country_code;
    this.#countryName = dto.country_name;
  }

  get countryId() {
    return this.#countryId;
  }

  toModel() {
    return {
      countryId: this.#countryId,
      coretaxCountryId: this.#coretaxCountryId,
      rajaOngkirId: this.#rajaOngkirId,
      countryCode: this.#countryCode,
      countryName: this.#countryName,
      ...super.toModel()
    };
  }
}

class CountryCodeDto extends StandardDto {
  #id;
  #iso;
  #name;
  #nicename;
  #iso3;
  #numcode;
  #phonecode;

  constructor(dto) {
    super(dto);
    this.#id = dto.id;
    this.#iso = dto.iso;
    this.#name = dto.name;
    this.#nicename = dto.nicename;
    this.#iso3 = dto.iso3;
    this.#numcode = dto.numcode;
    this.#phonecode = dto.phonecode;
  }

  get id() {
    return this.#id;
  }

  toModel() {
    return {
      id: this.#id,
      iso: this.#iso,
      name: this.#name,
      nicename: this.#nicename,
      iso3: this.#iso3,
      numcode: this.#numcode,
      phonecode: this.#phonecode
    };
  }
}

export { CountryDto, CountryCodeDto };

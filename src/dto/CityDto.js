import StandardDto from './StandardDto.js';

class CityDto extends StandardDto {
  #cityId;
  #companyParentId;
  #rajaOngkirId;
  #provinceId;
  #countryId;
  #cityCode;
  #cityName;
  #postalCode;

  constructor(dto) {
    super(dto);
    this.#cityId = dto.city_id;
    this.#companyParentId = dto.company_parent_id;
    this.#rajaOngkirId = dto.raja_ongkir_id;
    this.#provinceId = dto.province_id;
    this.#countryId = dto.country_id;
    this.#cityCode = dto.city_code;
    this.#cityName = dto.city_name;
    this.#postalCode = dto.postal_code;
  }

  get cityId() {
    return this.#cityId;
  }

  toModel() {
    return {
      cityId: this.#cityId,
      companyParentId: this.#companyParentId,
      rajaOngkirId: this.#rajaOngkirId,
      provinceId: this.#provinceId,
      countryId: this.#countryId,
      cityCode: this.#cityCode,
      cityName: this.#cityName,
      postalCode: this.#postalCode,
      ...super.toModel()
    };
  }
}

export default CityDto;

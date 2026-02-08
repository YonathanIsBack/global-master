import StandardDto from './StandardDto.js';

class DistrictDto extends StandardDto {
  #districtId;
  #rajaOngkirId;
  #countryId;
  #provinceId;
  #cityId;
  #districtCode;
  #districtName;
  #postalCode;
  #isused;

  constructor(dto) {
    super(dto);
    this.#districtId = dto.district_id;
    this.#rajaOngkirId = dto.raja_ongkir_id;
    this.#countryId = dto.country_id;
    this.#provinceId = dto.province_id;
    this.#cityId = dto.city_id;
    this.#districtCode = dto.district_code;
    this.#districtName = dto.district_name;
    this.#postalCode = dto.postal_code;
    this.#isused = dto.isused;
  }

  get districtId() {
    return this.#districtId;
  }

  toModel() {
    return {
      districtId: this.#districtId,
      rajaOngkirId: this.#rajaOngkirId,
      countryId: this.#countryId,
      provinceId: this.#provinceId,
      cityId: this.#cityId,
      districtCode: this.#districtCode,
      districtName: this.#districtName,
      postalCode: this.#postalCode,
      isused: this.#isused,
      ...super.toModel()
    };
  }
}

export default DistrictDto;

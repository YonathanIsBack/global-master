import StandardDto from './StandardDto.js';

class ProvinceDto extends StandardDto {
  #provinceId;
  #companyParentId;
  #rajaOngkirId;
  #provinceCode;
  #provinceName;
  #countryId;

  constructor(dto) {
    super(dto);
    this.#provinceId = dto.province_id;
    this.#companyParentId = dto.company_parent_id;
    this.#rajaOngkirId = dto.raja_ongkir_id;
    this.#countryId = dto.country_id;
    this.#provinceCode = dto.province_code;
    this.#provinceName = dto.province_name;
  }

  get provinceId() {
    return this.#provinceId;
  }

  toModel() {
    return {
      provinceId: this.#provinceId,
      companyParentId: this.#companyParentId,
      rajaOngkirId: this.#rajaOngkirId,
      countryId: this.#countryId,
      provinceCode: this.#provinceCode,
      provinceName: this.#provinceName,
      ...super.toModel()
    };
  }
}

export default ProvinceDto;

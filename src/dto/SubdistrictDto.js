import StandardDto from './StandardDto.js';

class SubdistrictDto extends StandardDto {
  #subdistrictId;
  #rajaOngkirId;
  #countryId;
  #provinceId;
  #cityId;
  #districtId;
  #subdistrictCode;
  #subdistrictName;
  #postalCode;
  #isused;

  constructor(dto) {
    super(dto);
    this.#subdistrictId = dto.subdistrict_id;
    this.#rajaOngkirId = dto.raja_ongkir_id;
    this.#countryId = dto.country_id;
    this.#provinceId = dto.province_id;
    this.#cityId = dto.city_id;
    this.#districtId = dto.district_id;
    this.#subdistrictCode = dto.subdistrict_code;
    this.#subdistrictName = dto.subdistrict_name;
    this.#postalCode = dto.postal_code;
    this.#isused = dto.isused;
  }

  get subdistrictId() {
    return this.#subdistrictId;
  }

  toModel() {
    return {
      subdistrictId: this.#subdistrictId,
      rajaOngkirId: this.#rajaOngkirId,
      countryId: this.#countryId,
      provinceId: this.#provinceId,
      cityId: this.#cityId,
      districtId: this.#districtId,
      subdistrictCode: this.#subdistrictCode,
      subdistrictName: this.#subdistrictName,
      postalCode: this.#postalCode,
      isused: this.#isused,
      ...super.toModel()
    };
  }
}

export default SubdistrictDto;

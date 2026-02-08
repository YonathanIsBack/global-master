import StandardDto from './StandardDto.js';

class LocationDto extends StandardDto {
  #locationId;
  #companyId;
  #locationCode;
  #locationName;

  constructor(dto) {
    super(dto);
    this.#locationId = dto.location_id;
    this.#companyId = dto.company_id;
    this.#locationCode = dto.location_code;
    this.#locationName = dto.location_name;
  }

  get locationId() {
    return this.#locationId;
  }

  toModel() {
    return {
      locationId: this.#locationId,
      companyId: this.#companyId,
      locationCode: this.#locationCode,
      locationName: this.#locationName,
      ...super.toModel()
    };
  }
}

export default LocationDto;

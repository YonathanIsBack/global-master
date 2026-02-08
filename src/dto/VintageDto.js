import StandardDto from './StandardDto.js';

class VintageDto extends StandardDto {
  #vintageId;
  #companyParentId;
  #vintageCode;
  #vintageName;

  constructor(dto) {
    super(dto);
    this.#vintageId = dto.vintage_id;
    this.#companyParentId = dto.company_parent_id;
    this.#vintageCode = dto.vintage_code;
    this.#vintageName = dto.vintage_name;
  }

  get vintageId() {
    return this.#vintageId;
  }

  toModel() {
    return {
      vintageId: this.#vintageId,
      companyParentId: this.#companyParentId,
      vintageCode: this.#vintageCode,
      vintageName: this.#vintageName,
      ...super.toModel()
    };
  }
}

export default VintageDto;

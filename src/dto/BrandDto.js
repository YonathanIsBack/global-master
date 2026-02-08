import StandardDto from './StandardDto.js';

class BrandDto extends StandardDto {
  #brandId;
  #companyParentId;
  #supplierGroupId;
  #supplierId;
  #brandCode;
  #brandName;

  constructor(dto) {
    super(dto);
    this.#brandId = dto.brand_id;
    this.#companyParentId = dto.company_parent_id;
    this.#supplierGroupId = dto.supplier_group_id;
    this.#supplierId = dto.supplier_id;
    this.#brandCode = dto.brand_code;
    this.#brandName = dto.brand_name;
  }

  get brandId() {
    return this.#brandId;
  }

  toModel() {
    return {
      brandId: this.#brandId,
      companyParentId: this.#companyParentId,
      supplierGroupId: this.#supplierGroupId,
      supplierId: this.#supplierId,
      brandCode: this.#brandCode,
      brandName: this.#brandName,
      ...super.toModel()
    };
  }
}

export default BrandDto;

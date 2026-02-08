import StandardDto from './StandardDto.js';

class TrSalesTargetDto extends StandardDto {
  #salesTargetId;
  #companyParentId;
  #companyId;
  #targetType;
  #targetName;
  #unit;

  constructor(dto) {
    super(dto);
    this.#salesTargetId = dto.sales_target_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#targetType = dto.target_type;
    this.#targetName = dto.target_name;
    this.#unit = dto.unit;
  }

  get salesTargetId() {
    return this.#salesTargetId;
  }

  toModel() {
    return {
      salesTargetId: this.#salesTargetId,
      companyParentId: this.#companyParentId,
      companyId: this.#companyId,
      targetType: this.#targetType,
      targetName: this.#targetName,
      unit: this.#unit,
      ...super.toModel()
    };
  }
}

class TrSalesTargetDtDto extends StandardDto {
  #salesTargetDtId;
  #companyParentId;
  #salesTargetId;
  #targetType;
  #salesTargetNameId;
  #salesTargetValue;

  constructor(dto) {
    super(dto);
    this.#salesTargetDtId = dto.sales_target_dt_id;
    this.#companyParentId = dto.company_parent_id;
    this.#salesTargetId = dto.sales_target_id;
    this.#targetType = dto.target_type;
    this.#salesTargetNameId = dto.sales_target_name_id;
    this.#salesTargetValue = dto.sales_target_value;
  }

  get salesTargetDtId() {
    return this.#salesTargetDtId;
  }

  toModel() {
    return {
      salesTargetDtId: this.#salesTargetDtId,
      companyParentId: this.#companyParentId,
      salesTargetId: this.#salesTargetId,
      targetType: this.#targetType,
      salesTargetNameId: this.#salesTargetNameId,
      salesTargetValue: this.#salesTargetValue,
      ...super.toModel()
    };
  }
}

export { TrSalesTargetDto, TrSalesTargetDtDto };

import StandardDto from './StandardDto.js';

class TrSalesmanTargetDto extends StandardDto {
  salesmanTargetId;
  #companyParentId;
  #salesmanId;
  #targetType;
  #targetName;
  #unit;

  constructor(dto) {
    super(dto);
    this.salesmanTargetId = dto.salesman_target_id;
    this.#companyParentId = dto.company_parent_id;
    this.#salesmanId = dto.salesman_id;
    this.#targetType = dto.target_type;
    this.#targetName = dto.target_name;
    this.#unit = dto.unit;
  }

  get salesmanTargetId() {
    return this.salesmanTargetId;
  }

  toModel() {
    return {
      salesmanTargetId: this.salesmanTargetId,
      companyParentId: this.#companyParentId,
      salesmanId: this.#salesmanId,
      targetType: this.#targetType,
      targetName: this.#targetName,
      unit: this.#unit,
      ...super.toModel()
    };
  }
}

class TrSalesmanTargetDtDto extends StandardDto {
  #salesmanTargetDtId;
  #companyParentId;
  #salesmanTargetId;
  #targetType;
  #salesTargetNameId;
  #salesTargetValue;

  constructor(dto) {
    super(dto);
    this.#salesmanTargetDtId = dto.salesman_target_dt_id;
    this.#companyParentId = dto.company_parent_id;
    this.#salesmanTargetId = dto.salesman_target_id;
    this.#targetType = dto.target_type;
    this.#salesTargetNameId = dto.sales_target_name_id;
    this.#salesTargetValue = dto.sales_target_value;
  }

  get salesmanTargetDtId() {
    return this.#salesmanTargetDtId;
  }

  toModel() {
    return {
      salesmanTargetDtId: this.#salesmanTargetDtId,
      companyParentId: this.#companyParentId,
      salesmanTargetId: this.#salesmanTargetId,
      targetType: this.#targetType,
      salesTargetNameId: this.#salesTargetNameId,
      salesTargetValue: this.#salesTargetValue,
      ...super.toModel()
    };
  }
}

export { TrSalesmanTargetDtDto, TrSalesmanTargetDto };

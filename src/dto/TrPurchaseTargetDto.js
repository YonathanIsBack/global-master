import StandardDto from './StandardDto.js';

class TrPurchaseTargetDto extends StandardDto {
  #purchaseTargetId;
  #companyParentId;
  #companyId;
  #targetType;
  #targetName;
  #unit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#purchaseTargetId = dto.purchase_target_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#targetType = dto.target_type;
    this.#targetName = dto.target_name;
    this.#unit = dto.unit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get purchaseTargetId() {
    return this.#purchaseTargetId;
  }

  toModel() {
    return {
      purchaseTargetId: this.#purchaseTargetId,
      companyParentId: this.#companyParentId,
      companyId: this.#companyId,
      targetType: this.#targetType,
      targetName: this.#targetName,
      unit: this.#unit,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class TrPurchaseTargetDtDto extends StandardDto {
  #purchaseTargetDtId;
  #companyParentId;
  #purchaseTargetId;
  #targetType;
  #purchaseTargetNameId;
  #purchaseTargetValue;

  constructor(dto) {
    super(dto);
    this.#purchaseTargetDtId = dto.purchase_target_dt_id;
    this.#companyParentId = dto.company_parent_id;
    this.#purchaseTargetId = dto.purchase_target_id;
    this.#targetType = dto.target_type;
    this.#purchaseTargetNameId = dto.purchase_target_name_id;
    this.#purchaseTargetValue = dto.purchase_target_value;
  }

  get purchaseTargetDtId() {
    return this.#purchaseTargetDtId;
  }

  toModel() {
    return {
      purchaseTargetDtId: this.#purchaseTargetDtId,
      companyParentId: this.#companyParentId,
      purchaseTargetId: this.#purchaseTargetId,
      targetType: this.#targetType,
      purchaseTargetNameId: this.#purchaseTargetNameId,
      purchaseTargetValue: this.#purchaseTargetValue,
      ...super.toModel()
    };
  }
}

export { TrPurchaseTargetDtDto, TrPurchaseTargetDto };

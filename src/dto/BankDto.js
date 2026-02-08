import StandardDto from './StandardDto.js';

class BankDto extends StandardDto {
  #bankId;
  #companyParentId;
  #bankCode;
  #bankName;

  constructor(dto) {
    super(dto);
    this.#bankId = dto.bank_id;
    this.#companyParentId = dto.company_parent_id;
    this.#bankCode = dto.bank_code;
    this.#bankName = dto.bank_name;
  }

  get bankId() {
    return this.#bankId;
  }

  toModel() {
    return {
      bankId: this.#bankId,
      companyParentId: this.#companyParentId,
      bankCode: this.#bankCode,
      bankName: this.#bankName,
      ...super.toModel()
    };
  }
}

export default BankDto;

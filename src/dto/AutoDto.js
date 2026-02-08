import StandardDto from './StandardDto.js';

class AutoCodeDto extends StandardDto {
  #autoCodeId;
  #autoCodeType;
  #autoCodePrefi;
  #digit;
  #resetTime;

  constructor(dto) {
    super(dto);
    this.#autoCodeId = dto.auto_code_id;
    this.#autoCodeType = dto.auto_code_type;
    this.#autoCodePrefi = dto.auto_code_prefix;
    this.#digit = dto.digit;
    this.#resetTime = dto.reset_time;
  }

  get autoCodeId() {
    return this.#autoCodeId;
  }

  toModel() {
    return {
      autoCodeId: this.#autoCodeId,
      autoCodeType: this.#autoCodeType,
      autoCodePrefi: this.#autoCodePrefi,
      digit: this.#digit,
      resetTime: this.#resetTime,
      ...super.toModel()
    };
  }
}

class AutoCodeCountDto extends StandardDto {
  #autoCodeCountId;
  #autoCodeId;
  #autoYear;
  #autoMonth;
  #autoDays;
  #currentNumber;

  constructor(dto) {
    super(dto);
    this.#autoCodeCountId = dto.auto_code_count_id;
    this.#autoCodeId = dto.auto_code_id;
    this.#autoYear = dto.auto_year;
    this.#autoMonth = dto.auto_month;
    this.#autoDays = dto.auto_days;
    this.#currentNumber = dto.current_number;
  }

  get autoCodeCountId() {
    return this.#autoCodeCountId;
  }

  toModel() {
    return {
      autoCodeCountId: this.#autoCodeCountId,
      autoCodeId: this.#autoCodeId,
      autoYear: this.#autoYear,
      autoMonth: this.#autoMonth,
      autoDays: this.#autoDays,
      currentNumber: this.#currentNumber,
      ...super.toModel()
    };
  }
}

class AutoJurnalDto extends StandardDto {
  #autoJurnalId;
  #coaId;
  #autoJurnalName;

  constructor(dto) {
    super(dto);
    this.#autoJurnalId = dto.auto_jurnal_id;
    this.#coaId = dto.coa_id;
    this.#autoJurnalName = dto.auto_jurnal_name;
  }

  get autoJurnalId() {
    return this.#autoJurnalId;
  }

  toModel() {
    return {
      autoJurnalId: this.#autoJurnalId,
      coaId: this.#coaId,
      autoJurnalName: this.#autoJurnalName,
      ...super.toModel()
    };
  }
}

export { AutoCodeCountDto, AutoCodeDto, AutoJurnalDto };


import StandardDto from "../StandardDto.js";

class StCoaDto extends StandardDto {
  #stCoaId;
  #stCoaName;

  constructor(dto) {
    super(dto);
    this.#stCoaId = dto.st_coa_id;
    this.#stCoaName = dto.st_coa_name;
  }

  get stCoaId() {
    return this.#stCoaId;
  }

  toModel() {
    return {
      stCoaId: this.#stCoaId,
      stCoaName: this.#stCoaName,
      ...super.toModel()
    };
  }
}

class StCoaDtDto extends StandardDto {
  #stCoaDtId;
  #stCoaId;
  #coaId;
  #isdefault;

  constructor(dto) {
    super(dto);
    this.#stCoaDtId = dto.st_coa_dt_id;
    this.#stCoaId = dto.st_coa_id;
    this.#coaId = dto.coa_id;
    this.#isdefault = dto.isdefault;
  }

  get stCoaDtId() {
    return this.#stCoaDtId;
  }

  toModel() {
    return {
      stCoaDtId: this.#stCoaDtId,
      stCoaId: this.#stCoaId,
      coaId: this.#coaId,
      isdefault: this.#isdefault,
      ...super.toModel()
    };
  }
}

export { StCoaDto, StCoaDtDto };

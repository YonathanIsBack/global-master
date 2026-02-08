import StandardDto from './StandardDto.js';

class StratumDto extends StandardDto {
  #stratumId;
  #stratumCode;
  #stratumName;

  constructor(dto) {
    super(dto);
    this.#stratumId = dto.stratum_id;
    this.#stratumCode = dto.stratum_code;
    this.#stratumName = dto.stratum_name;
  }

  get stratumId() {
    return this.#stratumId;
  }

  toModel() {
    return {
      stratumId: this.#stratumId,
      stratumCode: this.#stratumCode,
      stratumName: this.#stratumName,
      ...super.toModel()
    };
  }
}

export default StratumDto;

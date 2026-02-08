import StandardDto from './StandardDto.js';

class PrincipalDto extends StandardDto {
  #principalId;
  #principalCode;
  #principalName;

  constructor(dto) {
    super(dto);
    this.#principalId = dto.principal_id;
    this.#principalCode = dto.principal_code;
    this.#principalName = dto.principal_name;
  }

  get principalId() {
    return this.#principalId;
  }

  toModel() {
    return {
      principalId: this.#principalId,
      principalCode: this.#principalCode,
      principalName: this.#principalName,
      ...super.toModel()
    };
  }
}

export default PrincipalDto;

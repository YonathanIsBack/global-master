import StandardDto from './StandardDto.js';

class PeriodeLogDto extends StandardDto {
  #periodeLogId;
  #periodeId;
  #userId;
  #username;
  #logsType;
  #logsId;

  constructor(dto) {
    super(dto);
    this.#periodeLogId = dto.periode_log_id;
    this.#periodeId = dto.periode_id;
    this.#userId = dto.user_id;
    this.#username = dto.username;
    this.#logsType = dto.logs_type;
    this.#logsId = dto.logs_id;
  }

  get periodeLogId() {
    return this.#periodeLogId;
  }

  toModel() {
    return {
      periodeLogId: this.#periodeLogId,
      periodeId: this.#periodeId,
      userId: this.#userId,
      username: this.#username,
      logsType: this.#logsType,
      logsId: this.#logsId,
      ...super.toModel()
    };
  }
}

export default PeriodeLogDto;

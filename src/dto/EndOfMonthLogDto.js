import StandardDto from './StandardDto.js';

class EndOfMonthLogDto extends StandardDto {
  #eomLogId;
  #eomId;
  #userId;
  #username;
  #logsType;
  #logsId;

  constructor(dto) {
    super(dto);
    this.#eomLogId = dto.eom_log_id;
    this.#eomId = dto.eom_id;
    this.#userId = dto.user_id;
    this.#username = dto.username;
    this.#logsType = dto.logs_type;
    this.#logsId = dto.logs_id;
  }

  get eomLogId() {
    return this.#eomLogId;
  }

  toModel() {
    return {
      eomLogId: this.#eomLogId,
      eomId: this.#eomId,
      userId: this.#userId,
      username: this.#username,
      logsType: this.#logsType,
      logsId: this.#logsId,
      ...super.toModel()
    };
  }
}

export default EndOfMonthLogDto;

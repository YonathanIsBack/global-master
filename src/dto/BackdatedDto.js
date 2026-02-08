import StandardDto from './StandardDto.js';

class BackDatedDto extends StandardDto {
  #backdatedId;
  #backdatedName;
  #startDate;
  #endDate;
  #limitTime;

  constructor(dto) {
    super(dto);
    this.#backdatedId = dto.backdated_id;
    this.#backdatedName = dto.backdated_name;
    this.#startDate = dto.start_date;
    this.#endDate = dto.end_date;
    this.#limitTime = dto.limit_time;
  }
  get backdatedId() {
    return this.#backdatedId;
  }

  toModel() {
    return {
      backdatedId: this.#backdatedId,
      backdatedName: this.#backdatedName,
      startDate: this.#startDate,
      endDate: this.#endDate,
      limitTime: this.#limitTime,
      ...super.toModel()
    };
  }
}

class BackDatedLogsDto extends StandardDto {
  #backdatedLogsId;
  backdatedId;
  #userId;
  #username;
  #logsType;
  #logsId;

  constructor(dto) {
    super(dto);
    this.#backdatedLogsId = dto.backdated_logs_id;
    this.backdatedId = dto.backdated_id;
    this.#userId = dto.user_id;
    this.#username = dto.username;
    this.#logsType = dto.logs_type;
    this.#logsId = dto.logs_id;
  }

  get backdatedLogsId() {
    return this.#backdatedLogsId;
  }

  toModel() {
    return {
      backdatedLogsId: this.#backdatedLogsId,
      backdatedId: this.backdatedId,
      userId: this.#userId,
      username: this.#username,
      logsType: this.#logsType,
      logsId: this.#logsId,
      ...super.toModel()
    };
  }
}

class BackDatedUserDto extends StandardDto {
  #backdatedUserId;
  #backedateId;
  #userId;

  constructor(dto) {
    super(dto);
    this.#backdatedUserId = dto.backdated_user_id;
    this.#backedateId = dto.backdated_id;
    this.#userId = dto.user_id;
  }

  get backdatedUserId() {
    return this.#backdatedUserId;
  }
  toModel() {
    return {
      backdatedUserId: this.#backdatedUserId,
      backedateId: this.#backedateId,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

export { BackDatedDto, BackDatedLogsDto, BackDatedUserDto };

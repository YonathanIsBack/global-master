import StandardDto from './StandardDto.js';

class StAutoApproveDto extends StandardDto {
  #autoApproveId;
  #transactionId;
  #isauto;
  #iscancel;
  #limitTime;
  #limitTimeApprove;

  constructor(dto) {
    super(dto);
    this.#autoApproveId = dto.auto_approve_id;
    this.#transactionId = dto.transaction_id;
    this.#isauto = dto.isauto;
    this.#iscancel = dto.iscancel;
    this.#limitTime = dto.limit_time;
    this.#limitTimeApprove = dto.limit_time_approve;
  }

  get autoApproveId() {
    return this.#autoApproveId;
  }

  toModel() {
    return {
      autoApproveId: this.#autoApproveId,
      transactionId: this.#transactionId,
      isauto: this.#isauto,
      iscancel: this.#iscancel,
      limitTime: this.#limitTime,
      limitTimeApprove: this.#limitTimeApprove,
      ...super.toModel()
    };
  }
}

export default StAutoApproveDto;

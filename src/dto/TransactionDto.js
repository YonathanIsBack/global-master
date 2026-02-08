import StandardDto from './StandardDto.js';

class TransactionDto extends StandardDto {
  #noTransactionId;
  #noTransactionName;
  #noTransactionPrefix;
  #digit;
  #resetTime;
  #isActive;
  #coaId;

  constructor(dto) {
    super(dto);
    this.#noTransactionId = dto.no_transaction_id;
    this.#noTransactionName = dto.no_transaction_name;
    this.#noTransactionPrefix = dto.no_transaction_prefix;
    this.#digit = dto.digit;
    this.#resetTime = dto.reset_time;
    this.#isActive = dto.isactive;
    this.#coaId = dto.coa_id;
  }

  get noTransactionId() {
    return this.#noTransactionId;
  }

  toModel() {
    return {
      noTransactionId: this.#noTransactionId,
      noTransactionName: this.#noTransactionName,
      noTransactionPrefix: this.#noTransactionPrefix,
      digit: this.#digit,
      resetTime: this.#resetTime,
      isactive: this.#isActive,
      coaId: this.#coaId,
      ...super.toModel()
    };
  }
}

export default TransactionDto;

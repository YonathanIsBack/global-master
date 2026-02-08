class TransactionCountDto {
  #noTransactionCountId;
  #noTransactionId;
  #transactionYear;
  #transactionMonth;
  #transactionWeek;
  #transactionDays;
  #currentNumber;

  constructor(dto) {
    const { no_transaction_count } = dto;
    if (no_transaction_count == null || no_transaction_count.length == 0) {
      return;
    }
    this.#noTransactionCountId = no_transaction_count[0].no_transaction_count_id;
    this.#noTransactionId = no_transaction_count[0].no_transaction_id;
    this.#transactionYear = no_transaction_count[0].transaction_year;
    this.#transactionMonth = no_transaction_count[0].transaction_month;
    this.#transactionWeek = no_transaction_count[0].transaction_week;
    this.#transactionDays = no_transaction_count[0].transaction_days;
    this.#currentNumber = no_transaction_count[0].current_number;
  }

  get noTransactionCountId() {
    return this.#noTransactionCountId;
  }

  toModel() {
    return {
      noTransactionCountId: this.#noTransactionCountId,
      noTransactionId: this.#noTransactionId,
      transactionYear: this.#transactionYear,
      transactionMonth: this.#transactionMonth,
      transactionWeek: this.#transactionWeek,
      transactionDays: this.#transactionDays,
      currentNumber: this.#currentNumber
    };
  }
}

export default TransactionCountDto;

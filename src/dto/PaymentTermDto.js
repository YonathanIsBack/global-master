import StandardDto from './StandardDto.js';

class PaymentTermDto extends StandardDto {
  #paymentTermId;
  #paymentTermName;
  #dueDate;
  #earlyPaymentDays;
  #earlyPaymentDisc;
  #isdefault;
  #ispay;

  constructor(dto) {
    super(dto);
    this.#paymentTermId = dto.payment_term_id;
    this.#paymentTermName = dto.payment_term_name;
    this.#dueDate = dto.due_date;
    this.#earlyPaymentDays = dto.early_payment_days;
    this.#earlyPaymentDisc = dto.early_payment_disc;
    this.#isdefault = dto.isdefault;
    this.#ispay = dto.ispay;
  }

  get paymentTermId() {
    return this.#paymentTermId;
  }

  toModel() {
    return {
      paymentTermId: this.#paymentTermId,
      paymentTermName: this.#paymentTermName,
      dueDate: this.#dueDate,
      earlyPaymentDays: this.#earlyPaymentDays,
      earlyPaymentDisc: this.#earlyPaymentDisc,
      isdefault: this.#isdefault,
      ispay: this.#ispay,
      ...super.toModel()
    };
  }
}

export default PaymentTermDto;

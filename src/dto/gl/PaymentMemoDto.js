import StandardDto from '../StandardDto.js';

class PaymentMemoDto extends StandardDto {
  #paymentMemoId;
  #paymentMemoCode;
  #paymentMemoCodeTemp;
  #paymentMemoDate;
  #coaSubgroupId;
  #paymentMethod;
  #chequeNumber;
  #noteTransaction;
  #dueDate;
  #coaBankId;
  #istax;
  #taxPercent;
  #currencyId;
  #rate;
  #totalSpend;
  #name;
  #npwpType;
  #npwp;
  #reffNumber;
  #reffDate;
  #taxNumber;
  #countryId;
  #swiftCode;
  #notePayment;
  #bankId;
  #bankAccNo;
  #bankAccName;
  #status;
  #statusNext;
  #confirmtimeF;
  #confirmbyF;

  constructor(request) {
    super(request);
    this.#paymentMemoId = request.payment_memo_id;
    this.#paymentMemoCode = request.payment_memo_code;
    this.#paymentMemoCodeTemp = request.payment_memo_code_temp;
    this.#paymentMemoDate = request.payment_memo_date;
    this.#coaSubgroupId = request.coa_subgroup_id;
    this.#paymentMethod = request.payment_method;
    this.#chequeNumber = request.cheque_number;
    this.#noteTransaction = request.note_transaction;
    this.#dueDate = request.due_date;
    this.#coaBankId = request.coa_bank_id;
    this.#istax = request.istax;
    this.#taxPercent = request.tax_percent;
    this.#currencyId = request.currency_id;
    this.#rate = request.rate;
    this.#totalSpend = request.total_spend;
    this.#name = request.name;
    this.#npwpType = request.npwp_type;
    this.#npwp = request.npwp;
    this.#reffNumber = request.reff_number;
    this.#reffDate = request.reff_date;
    this.#taxNumber = request.tax_number;
    this.#countryId = request.country_id;
    this.#swiftCode = request.swift_code;
    this.#notePayment = request.note_payment;
    this.#bankId = request.bank_id;
    this.#bankAccNo = request.bank_acc_no;
    this.#bankAccName = request.bank_acc_name;
    this.#status = request.status;
    this.#statusNext = request.status_next;
    this.#confirmtimeF = request.confirmtime_f;
    this.#confirmbyF = request.confirmby_f;
  }

  get paymentMemoId() {
    return this.#paymentMemoId;
  }

  toModel() {
    return {
      paymentMemoId: this.#paymentMemoId,
      paymentMemoCode: this.#paymentMemoCode,
      paymentMemoCodeTemp: this.#paymentMemoCodeTemp,
      paymentMemoDate: this.#paymentMemoDate,
      coaSubgroupId: this.#coaSubgroupId,
      paymentMethod: this.#paymentMethod,
      chequeNumber: this.#chequeNumber,
      noteTransaction: this.#noteTransaction,
      dueDate: this.#dueDate,
      coaBankId: this.#coaBankId,
      istax: this.#istax,
      taxPercent: this.#taxPercent,
      currencyId: this.#currencyId,
      rate: this.#rate,
      totalSpend: this.#totalSpend,
      name: this.#name,
      npwpType: this.#npwpType,
      npwp: this.#npwp,
      reffNumber: this.#reffNumber,
      reffDate: this.#reffDate,
      taxNumber: this.#taxNumber,
      countryId: this.#countryId,
      swiftCode: this.#swiftCode,
      notePayment: this.#notePayment,
      bankId: this.#bankId,
      bankAccNo: this.#bankAccNo,
      bankAccName: this.#bankAccName,
      status: this.#status,
      statusNext: this.#statusNext,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}
class PaymentMemoImg extends StandardDto {
  #paymentMemoImgId;
  #paymentMemoId;
  #imgSrc;

  constructor(request) {
    super(request);
    this.#paymentMemoImgId = request.payment_memo_img_id;
    this.#paymentMemoId = request.payment_memo_id;
    this.#imgSrc = request.img_src;
  }

  get paymentMemoImgId() {
    return this.#paymentMemoImgId;
  }

  toModel() {
    return {
      paymentMemoImgId: this.#paymentMemoImgId,
      paymentMemoId: this.#paymentMemoId,
      imgSrc: this.#imgSrc,
      ...super.toModel()
    };
  }
}

export { PaymentMemoImg, PaymentMemoDto };

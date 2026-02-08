import StandardDto from '../../StandardDto.js';

class FixedAssetPaymentDto extends StandardDto {
  #fixedAssetPaymentId;
  #fixedAssetPaymentCode;
  #fixedAssetPaymentCodeTemp;
  #fixedAssetPaymentDate;
  #currencyId;
  #currencyRate;
  #totalPurchase;
  #totalPayment;
  #status;
  #statusNext;
  #coaId;
  #methodPayment;
  #peymentNo;
  #paymentDate;
  #paymentClearDate;
  #confirmtime;
  #confirmby;
  #unconfirmtime;
  #unconfirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(request) {
    super(request);
    this.#fixedAssetPaymentId = request.fixed_asset_payment_id;
    this.#fixedAssetPaymentCode = request.fixed_asset_payment_code;
    this.#fixedAssetPaymentCodeTemp = request.fixed_asset_payment_code_temp;
    this.#fixedAssetPaymentDate = request.fixed_asset_payment_date;
    this.#currencyId = request.currency_id;
    this.#currencyRate = request.currency_rate;
    this.#totalPurchase = request.total_purchase;
    this.#totalPayment = request.total_payment;
    this.#status = request.status;
    this.#statusNext = request.status_next;
    this.#coaId = request.coa_id;
    this.#methodPayment = request.method_payment;
    this.#peymentNo = request.peyment_no;
    this.#paymentDate = request.payment_date;
    this.#paymentClearDate = request.payment_clear_date;
    this.#confirmtime = request.confirmtime;
    this.#confirmby = request.confirmby;
    this.#unconfirmtime = request.unconfirmtime;
    this.#unconfirmby = request.unconfirmby;
    this.#confirmtimeF = request.confirmtime_f;
    this.#confirmbyF = request.confirmby_f;
  }

  get fixedAssetPaymentId() {
    return this.#fixedAssetPaymentId;
  }

  toModel() {
    return {
      fixedAssetPaymentId: this.#fixedAssetPaymentId,
      fixedAssetPaymentCode: this.#fixedAssetPaymentCode,
      fixedAssetPaymentCodeTemp: this.#fixedAssetPaymentCodeTemp,
      fixedAssetPaymentDate: this.#fixedAssetPaymentDate,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      totalPurchase: this.#totalPurchase,
      totalPayment: this.#totalPayment,
      status: this.#status,
      statusNext: this.#statusNext,
      coaId: this.#coaId,
      methodPayment: this.#methodPayment,
      peymentNo: this.#peymentNo,
      paymentDate: this.#paymentDate,
      paymentClearDate: this.#paymentClearDate,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      unconfirmtime: this.#unconfirmtime,
      unconfirmby: this.#unconfirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

export default FixedAssetPaymentDto;

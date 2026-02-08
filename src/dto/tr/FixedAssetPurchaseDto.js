import StandardDto from '../StandardDto.js';

class FixedAssetPurchaseDto extends StandardDto {
  #fixedAssetPurchaseId;
  #fixedAssetCode;
  #fixedAssetCodeTemp;
  #fixedAssetDate;
  #supplier;
  #biayaLainLian;
  #departmentId;
  #currencyId;
  #totalQty;
  #subtotal;
  #totalDisc;
  #taxPersen;
  #totalTax;
  #total;
  #totalPay;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #uncofirmtime;
  #unconfirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(request) {
    super(request);
    this.#fixedAssetPurchaseId = request.fixedAssetPurchaseId;
    this.#fixedAssetCode = request.fixedAssetCode;
    this.#fixedAssetCodeTemp = request.fixedAssetCodeTemp;
    this.#fixedAssetDate = request.fixedAssetDate;
    this.#supplier = request.supplier;
    this.#biayaLainLian = request.biayaLainLian;
    this.#departmentId = request.departmentId;
    this.#currencyId = request.currencyId;
    this.#totalQty = request.totalQty;
    this.#subtotal = request.subtotal;
    this.#totalDisc = request.totalDisc;
    this.#taxPersen = request.taxPersen;
    this.#totalTax = request.totalTax;
    this.#total = request.total;
    this.#totalPay = request.totalPay;
    this.#status = request.status;
    this.#statusNext = request.statusNext;
    this.#confirmtime = request.confirmtime;
    this.#confirmby = request.confirmby;
    this.#uncofirmtime = request.uncofirmtime;
    this.#unconfirmby = request.unconfirmby;
    this.#confirmtimeF = request.confirmtimeF;
    this.#confirmbyF = request.confirmbyF;
  }

  get fixedAssetPurchaseId() {
    return this.#fixedAssetPurchaseId;
  }

  toModel() {
    return {
      fixedAssetPurchaseId: this.#fixedAssetPurchaseId,
      fixedAssetCode: this.#fixedAssetCode,
      fixedAssetCodeTemp: this.#fixedAssetCodeTemp,
      fixedAssetDate: this.#fixedAssetDate,
      supplier: this.#supplier,
      biayaLainLian: this.#biayaLainLian,
      departmentId: this.#departmentId,
      currencyId: this.#currencyId,
      totalQty: this.#totalQty,
      subtotal: this.#subtotal,
      totalDisc: this.#totalDisc,
      taxPersen: this.#taxPersen,
      totalTax: this.#totalTax,
      total: this.#total,
      totalPay: this.#totalPay,
      status: this.#status,
      statusNext: this.#statusNext,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      uncofirmtime: this.#uncofirmtime,
      unconfirmby: this.#unconfirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

export default FixedAssetPurchaseDto;

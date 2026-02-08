import StandardDto from '../../StandardDto.js';

class FixedAssetPurchaseDto extends StandardDto {
  #fixedAssetPurchaseId;
  #fixedAssetCode;
  #fixedAssetCodeTemp;
  #fixedAssetDate;
  #supplier;
  #biayaLainLain;
  #departmentId;
  #currencyId;
  #currencyRate;
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
    this.#fixedAssetPurchaseId = request.fixed_asset_purchase_id;
    this.#fixedAssetCode = request.fixed_asset_code;
    this.#fixedAssetCodeTemp = request.fixed_asset_code_temp;
    this.#fixedAssetDate = request.fixed_asset_date;
    this.#supplier = request.supplier;
    this.#biayaLainLain = request.biaya_lain_lain;
    this.#departmentId = request.department_id;
    this.#currencyId = request.currency_id;
    this.#currencyRate = request.currency_rate;
    this.#totalQty = request.total_qty;
    this.#subtotal = request.subtotal;
    this.#totalDisc = request.total_disc;
    this.#taxPersen = request.tax_persen;
    this.#totalTax = request.total_tax;
    this.#total = request.total;
    this.#totalPay = request.total_pay;
    this.#status = request.status;
    this.#statusNext = request.status_next;
    this.#confirmtime = request.confirmtime;
    this.#confirmby = request.confirmby;
    this.#uncofirmtime = request.uncofirmtime;
    this.#unconfirmby = request.unconfirmby;
    this.#confirmtimeF = request.confirmtime_f;
    this.#confirmbyF = request.confirmby_f;
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
      biayaLainLain: this.#biayaLainLain,
      departmentId: this.#departmentId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
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

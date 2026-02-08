import StandardDto from '../../StandardDto.js';

class OffshorePurchaseOrderDto extends StandardDto {
  #offshorePurchaseOrderId;
  #offshorePurchaseOrderCode;
  #offshorePurchaseOrderCodeTemp;
  #offshorePurchaseOrderDate;
  #traceId;
  #supplierId;
  #currencyId;
  #currencyRate;
  #paymentTermId;
  #topDays;
  #dueDate;
  #note;
  #warehouseId;
  #address;
  #totalQty;
  #subtotal;
  #discPersen;
  #discAmount;
  #discPersen2;
  #discAmount2;
  #discPersen3;
  #discAmount3;
  #taxPersen;
  #taxAmount;
  #totalAdvpay;
  #totalCreditNote;
  #total;
  #status;
  #statusNext;
  #isFinish;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;
  #isedit;

  constructor(dto) {
    super(dto);
    this.#offshorePurchaseOrderId = dto.offshore_purchase_order_id;
    this.#offshorePurchaseOrderCode = dto.offshore_purchase_order_code;
    this.#offshorePurchaseOrderCodeTemp = dto.offshore_purchase_order_code_temp;
    this.#offshorePurchaseOrderDate = dto.offshore_purchase_order_date;
    this.#traceId = dto.trace_id;
    this.#supplierId = dto.supplier_id;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#paymentTermId = dto.payment_term_id;
    this.#topDays = dto.top_days;
    this.#dueDate = dto.due_date;
    this.#note = dto.note;
    this.#warehouseId = dto.warehouse_id;
    this.#address = dto.address;
    this.#totalQty = dto.total_qty;
    this.#subtotal = dto.subtotal;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#discPersen3 = dto.disc_persen3;
    this.#discAmount3 = dto.disc_amount3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#totalAdvpay = dto.total_advpay;
    this.#totalCreditNote = dto.total_credit_note;
    this.#total = dto.total;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isFinish = dto.is_finish;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get offshorePurchaseOrderId() {
    return this.#offshorePurchaseOrderId;
  }

  toModel() {
    return {
      offshorePurchaseOrderId: this.#offshorePurchaseOrderId,
      offshorePurchaseOrderCode: this.#offshorePurchaseOrderCode,
      offshorePurchaseOrderCodeTemp: this.#offshorePurchaseOrderCodeTemp,
      offshorePurchaseOrderDate: this.#offshorePurchaseOrderDate,
      traceId: this.#traceId,
      supplierId: this.#supplierId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      paymentTermId: this.#paymentTermId,
      topDays: this.#topDays,
      duedate: this.#dueDate,
      note: this.#note,
      warehouseId: this.#warehouseId,
      address: this.#address,
      totalQty: this.#totalQty,
      subtotal: this.#subtotal,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      discPersen3: this.#discPersen3,
      discAmount3: this.#discAmount3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      totalAdvpay: this.#totalAdvpay,
      totalCreditNote: this.#totalCreditNote,
      total: this.#total,
      status: this.#status,
      statusNext: this.#statusNext,
      isFinish: this.#isFinish,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      isedit: this.#isedit,
      ...super.toModel()
    };
  }
}

export default OffshorePurchaseOrderDto;

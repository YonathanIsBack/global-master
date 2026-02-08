import StandardDto from '../../StandardDto.js';

class OffshoreSalesInvoiceDto extends StandardDto {
  #offshoreSalesInvId;
  #offshoreSalesInvCode;
  #offshoreSalesInvCodeTemp;
  #offshoreSalesInvDate;
  #traceId;
  #customerId;
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
  #total;
  #totalPay;
  #status;
  #statusNext;
  #isFinish;
  #isedit;
  #confirmtime;
  #confirmby;

  constructor(dto) {
    super(dto);
    this.#offshoreSalesInvId = dto.offshore_sales_inv_id;
    this.#offshoreSalesInvCode = dto.offshore_sales_inv_code;
    this.#offshoreSalesInvCodeTemp = dto.offshore_sales_inv_code_temp;
    this.#offshoreSalesInvDate = dto.offshore_sales_inv_date;
    this.#traceId = dto.trace_id;
    this.#customerId = dto.customer_id;
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
    this.#total = dto.total;
    this.#totalPay = dto.total_pay;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isFinish = dto.is_finish;
    this.#isedit = dto.isedit;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
  }

  get offshoreSalesInvId() {
    return this.#offshoreSalesInvId;
  }

  toModel() {
    return {
      offshoreSalesInvId: this.#offshoreSalesInvId,
      offshoreSalesInvCode: this.#offshoreSalesInvCode,
      offshoreSalesInvCodeTemp: this.#offshoreSalesInvCodeTemp,
      offshoreSalesInvDate: this.#offshoreSalesInvDate,
      traceId: this.#traceId,
      customerId: this.#customerId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      paymentTermId: this.#paymentTermId,
      topDays: this.#topDays,
      dueDate: this.#dueDate,
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
      total: this.#total,
      totalPay: this.#totalPay,
      status: this.#status,
      statusNext: this.#statusNext,
      isFinish: this.#isFinish,
      isedit: this.#isedit,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      ...super.toModel()
    };
  }
}

export default OffshoreSalesInvoiceDto;

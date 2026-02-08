import StandardDto from '../../StandardDto.js';

class OffshorePurchaseInvoiceDto extends StandardDto {
  #offshorePurchaseInvId;
  #offshorePurchaseInvCode;
  #offshorePurchaseInvCodeTemp;
  #offshorePurchaseInvDate;
  #offshorePurchaseOrderId;
  #offshorePurchaseOrderCode;
  #offshorePurchaseReceiveId;
  #offshorePurchaseReceiveCode;
  #traceId;
  #supplierId;
  #supplierInvoiceNumber;
  #supplierInvoiceDate;
  #supplierInvoiceTotal;
  #vatNo;
  #vatDate;
  #warehouseId;
  #paymentTermId;
  #topDays;
  #dueDate;
  #currencyId;
  #currencyRate;
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
  #totalShipping;
  #totalAdvPay;
  #totalCreditNote;
  #totalAdvpayPayment;
  #totalCreditNotePayment;
  #totalPay;
  #note;
  #status;
  #statusNext;
  #isFinish;
  #isedit;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#offshorePurchaseInvId = dto.offshore_purchase_inv_id;
    this.#offshorePurchaseInvCode = dto.offshore_purchase_inv_code;
    this.#offshorePurchaseInvCodeTemp = dto.offshore_purchase_inv_code_temp;
    this.#offshorePurchaseInvDate = dto.offshore_purchase_inv_date;
    this.#offshorePurchaseOrderId = dto.offshore_purchase_order_id;
    this.#offshorePurchaseOrderCode = dto.offshore_purchase_order_code;
    this.#offshorePurchaseReceiveId = dto.offshore_purchase_receive_id;
    this.#offshorePurchaseReceiveCode = dto.offshore_purchase_receive_code;
    this.#traceId = dto.trace_id;
    this.#supplierId = dto.supplier_id;
    this.#supplierInvoiceNumber = dto.supplier_invoice_number;
    this.#supplierInvoiceDate = dto.supplier_invoice_date;
    this.#supplierInvoiceTotal = dto.supplier_invoice_total;
    this.#vatNo = dto.vat_no;
    this.#vatDate = dto.vat_date;
    this.#warehouseId = dto.warehouse_id;
    this.#paymentTermId = dto.payment_term_id;
    this.#topDays = dto.top_days;
    this.#dueDate = dto.due_date;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
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
    this.#totalShipping = dto.total_shipping;
    this.#totalAdvPay = dto.total_adv_pay;
    this.#totalCreditNote = dto.total_credit_note;
    this.#totalAdvpayPayment = dto.total_advpay_payment;
    this.#totalCreditNotePayment = dto.total_credit_note_payment;
    this.#totalPay = dto.total_pay;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isFinish = dto.is_finish;
    this.#isedit = dto.is_edit;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get offshorePurchaseInvId() {
    return this.#offshorePurchaseInvId;
  }

  toModel() {
    return {
      offshorePurchaseInvId: this.#offshorePurchaseInvId,
      offshorePurchaseInvCode: this.#offshorePurchaseInvCode,
      offshorePurchaseInvCodeTemp: this.#offshorePurchaseInvCodeTemp,
      offshorePurchaseInvDate: this.#offshorePurchaseInvDate,
      offshorePurchaseOrderId: this.#offshorePurchaseOrderId,
      offshorePurchaseOrderCode: this.#offshorePurchaseOrderCode,
      offshorePurchaseReceiveId: this.#offshorePurchaseReceiveId,
      offshorePurchaseReceiveCode: this.#offshorePurchaseReceiveCode,
      traceId: this.#traceId,
      supplierId: this.#supplierId,
      supplierInvoiceNumber: this.#supplierInvoiceNumber,
      supplierInvoiceDate: this.#supplierInvoiceDate,
      supplierInvoiceTotal: this.#supplierInvoiceTotal,
      vatNo: this.#vatNo,
      vatDate: this.#vatDate,
      warehouseId: this.#warehouseId,
      paymentTermId: this.#paymentTermId,
      topDays: this.#topDays,
      dueDate: this.#dueDate,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
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
      totalShipping: this.#totalShipping,
      totalAdvpay: this.#totalAdvPay,
      totalCreditNote: this.#totalCreditNote,
      totalAdvpayPayment: this.#totalAdvpayPayment,
      totalCreditNotePayment: this.#totalCreditNotePayment,
      totalPay: this.#totalPay,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      isFinish: this.#isFinish,
      isedit: this.#isedit,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

export default OffshorePurchaseInvoiceDto;

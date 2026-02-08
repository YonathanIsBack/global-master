import StandardDto from '../../StandardDto.js';

class OffshorePurchaseReceiveDto extends StandardDto {
  #offshorePurchaseReceiveId;
  #offshorePurchaseOrderId;
  #offshorePurchaseOrderCode;
  #offshorePurchaseReceiveCode;
  #offshorePurchaseReceiveCodeTemp;
  #offshorePurchaseReceiveDate;
  #traceId;
  #supplierId;
  #supplierInvNumber;
  #supplierInvDate;
  #currencyId;
  #currencyRate;
  #paymentTermId;
  #topDays;
  #shipping;
  #shippingDate;
  #shippingNo;
  #wbNo;
  #portOfOrigin;
  #portOfDestination;
  #warehouseId;
  #note;
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
    this.#offshorePurchaseReceiveId = dto.offshore_purchase_receive_id;
    this.#offshorePurchaseOrderId = dto.offshore_purchase_order_id;
    this.#offshorePurchaseOrderCode = dto.offshore_purchase_order_code;
    this.#offshorePurchaseReceiveCode = dto.offshore_purchase_receive_code;
    this.#offshorePurchaseReceiveCodeTemp = dto.offshore_purchase_receive_code_temp;
    this.#offshorePurchaseReceiveDate = dto.offshore_purchase_receive_date;
    this.#traceId = dto.trace_id;
    this.#supplierId = dto.supplier_id;
    this.#supplierInvNumber = dto.supplier_inv_number;
    this.#supplierInvDate = dto.supplier_inv_date;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#paymentTermId = dto.payment_term_id;
    this.#topDays = dto.top_days;
    this.#shipping = dto.shipping;
    this.#shippingDate = dto.shipping_date;
    this.#shippingNo = dto.shipping_no;
    this.#wbNo = dto.wb_no;
    this.#portOfOrigin = dto.port_of_origin;
    this.#portOfDestination = dto.port_of_destination;
    this.#warehouseId = dto.warehouse_id;
    this.#note = dto.note;
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
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isFinish = dto.is_finish;
    this.#isedit = dto.is_edit;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get offshorePurchaseReceiveId() {
    return this.#offshorePurchaseReceiveId;
  }

  toModel() {
    return {
      offshorePurchaseReceiveId: this.#offshorePurchaseReceiveId,
      offshorePurchaseOrderId: this.#offshorePurchaseOrderId,
      offshorePurchaseOrderCode: this.#offshorePurchaseOrderCode,
      offshorePurchaseReceiveCode: this.#offshorePurchaseReceiveCode,
      offshorePurchaseReceiveCodeTemp: this.#offshorePurchaseReceiveCodeTemp,
      offshorePurchaseReceiveDate: this.#offshorePurchaseReceiveDate,
      traceId: this.#traceId,
      supplierId: this.#supplierId,
      supplierInvNumber: this.#supplierInvNumber,
      supplierInvDate: this.#supplierInvDate,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      paymentTermId: this.#paymentTermId,
      topDays: this.#topDays,
      shipping: this.#shipping,
      shippingDate: this.#shippingDate,
      shippingNo: this.#shippingNo,
      wbNo: this.#wbNo,
      portOfOrigin: this.#portOfOrigin,
      portOfDestination: this.#portOfDestination,
      warehouseId: this.#warehouseId,
      note: this.#note,
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

export default OffshorePurchaseReceiveDto;

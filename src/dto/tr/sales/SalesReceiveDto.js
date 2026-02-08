import StandardDto from '../../StandardDto.js';

class SalesReceiveDto extends StandardDto {
  #salesRecieveId;
  #traceId;
  #companyId;
  #companyParentId;
  #salesRecieveCode;
  #whId;
  #supplierId;
  #shipping;
  #shippingNo;
  #shippingDate;
  #driver;
  #licensePlate;
  #status;
  #notes;

  constructor(dto) {
    super(dto);
    this.#salesRecieveId = dto.sales_recieve_id;
    this.#traceId = dto.trace_id;
    this.#companyId = dto.company_id;
    this.#companyParentId = dto.company_parent_id;
    this.#salesRecieveCode = dto.sales_recieve_code;
    this.#whId = dto.wh_id;
    this.#supplierId = dto.supplier_id;
    this.#shipping = dto.shipping;
    this.#shippingNo = dto.shipping_no;
    this.#shippingDate = dto.shipping_date;
    this.#driver = dto.driver;
    this.#licensePlate = dto.license_plate;
    this.#status = dto.status;
    this.#notes = dto.notes;
  }

  get salesRecieveId() {
    return this.#salesRecieveId;
  }

  toModel() {
    return {
      salesRecieveId: this.#salesRecieveId,
      traceId: this.#traceId,
      companyId: this.#companyId,
      companyParentId: this.#companyParentId,
      salesRecieveCode: this.#salesRecieveCode,
      whId: this.#whId,
      supplierId: this.#supplierId,
      shipping: this.#shipping,
      shippingNo: this.#shippingNo,
      shippingDate: this.#shippingDate,
      driver: this.#driver,
      licensePlate: this.#licensePlate,
      status: this.#status,
      notes: this.#notes,
      ...super.toModel()
    };
  }
}

class SalesReceiveDtDto extends StandardDto {
  #salesRecieveDtId;
  #salesRecieveId;
  #salesInvId;
  #invCode;
  #itemId;
  #itemCode;
  #itemName;
  #qty;

  constructor(dto) {
    super(dto);
    this.#salesRecieveDtId = dto.sales_recieve_dt_id;
    this.#salesRecieveId = dto.sales_advanced_payment_id;
    this.#salesInvId = dto.sales_inv_id;
    this.#invCode = dto.inv_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
  }

  get salesRecieveDtId() {
    return this.#salesRecieveDtId;
  }
  
  toModel() {
    return {
      salesRecieveDtId: this.#salesRecieveDtId,
      salesRecieveId: this.#salesRecieveId,
      salesInvId: this.#salesInvId,
      invCode: this.#invCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}

export { SalesReceiveDto, SalesReceiveDtDto };

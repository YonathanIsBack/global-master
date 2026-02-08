import StandardDto from './StandardDto.js';

class SalesmanDto extends StandardDto {
  #salesmanId;
  #companyParentId;
  #salesmanCode;
  #salesmanName;
  #iscommission;
  #dob;
  #locationId;
  #stratumId;
  #salesmanEmail;
  #salesmanPhone;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesmanId = dto.salesman_id;
    this.#companyParentId = dto.company_parent_id;
    this.#salesmanCode = dto.salesman_code;
    this.#salesmanName = dto.salesman_name;
    this.#iscommission = dto.iscommission;
    this.#dob = dto.dob;
    this.#locationId = dto.location_id;
    this.#stratumId = dto.stratum_id;
    this.#salesmanEmail = dto.salesman_email;
    this.#salesmanPhone = dto.salesman_phone;
    this.#userId = dto.user_idH;
  }

  get salesmanId() {
    return this.#salesmanId;
  }

  toModel() {
    return {
      salesmanId: this.#salesmanId,
      companyParentId: this.#companyParentId,
      salesmanCode: this.#salesmanCode,
      salesmanName: this.#salesmanName,
      iscommission: this.#iscommission,
      dob: this.#dob,
      locationId: this.#locationId,
      stratumId: this.#stratumId,
      salesmanEmail: this.#salesmanEmail,
      salesmanPhone: this.#salesmanPhone,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class SalesmanCommisionDto extends StandardDto {
  #salesmanCommissionId;
  #companyParentId;
  #name;
  #salesmanId;
  #salesCommission;
  #productId;
  #productCommission;
  #supplierGroupId;
  #supplierGroupCommission;
  #categoryId;
  #categoryCommission;
  #isinvoice;
  #invoiceCommission;
  #term;
  #termDay;
  #termPercent;
  #commission;
  #value;
  #calculation;

  constructor(dto) {
    super(dto);
    this.#salesmanCommissionId = dto.salesman_commission_id;
    this.#name = dto.name;
    this.#companyParentId = dto.company_parent_id;
    this.#salesmanId = dto.salesman_id;
    this.#salesCommission = dto.sales_commission;
    this.#productId = dto.product_id;
    this.#productCommission = dto.product_commission;
    this.#supplierGroupId = dto.supplier_group_id;
    this.#supplierGroupCommission = dto.supplier_group_commission;
    this.#categoryId = dto.category_id;
    this.#categoryCommission = dto.category_commission;
    this.#isinvoice = dto.isinvoice;
    this.#invoiceCommission = dto.invoice_commission;
    this.#term = dto.term;
    this.#termDay = dto.term_day;
    this.#termPercent = dto.term_percent;
    this.#commission = dto.commission;
    this.#value = dto.value;
    this.#calculation = dto.calculation;
  }

  get salesmanCommissionId() {
    return this.#salesmanCommissionId;
  }

  toModel() {
    return {
      salesmanCommissionId: this.#salesmanCommissionId,
      companyParentId: this.#companyParentId,
      name: this.#name,
      salesmanId: this.#salesmanId,
      salesCommission: this.#salesCommission,
      productId: this.#productId,
      productCommission: this.#productCommission,
      supplierGroupId: this.#supplierGroupId,
      supplierGroupCommission: this.#supplierGroupCommission,
      categoryId: this.#categoryId,
      categoryCommission: this.#categoryCommission,
      isinvoice: this.#isinvoice,
      invoiceCommission: this.#invoiceCommission,
      term: this.#term,
      termDay: this.#termDay,
      termPercent: this.#termPercent,
      commission: this.#commission,
      value: this.#value,
      calculation: this.#calculation,
      ...super.toModel()
    };
  }
}

class SalesmanTargetDto extends StandardDto {
  #salesmanTargetId;
  #companyParentId;
  #salesmanId;
  #productId;
  #productValue;
  #productQty;
  #categoryId;
  #categoryValue;
  #categoryQty;
  #brandId;
  #brandValue;
  #brandQty;

  constructor(dto) {
    super(dto);
    this.#salesmanTargetId = dto.salesman_target_id;
    this.#companyParentId = dto.company_parent_id;
    this.#salesmanId = dto.salesman_id;
    this.#productId = dto.product_id;
    this.#productValue = dto.product_value;
    this.#productQty = dto.product_qty;
    this.#categoryId = dto.category_id;
    this.#categoryValue = dto.category_value;
    this.#categoryQty = dto.category_qty;
    this.#brandId = dto.brand_id;
    this.#brandValue = dto.brand_value;
    this.#brandQty = dto.brand_qty;
  }

  get salesmanTargetId() {
    return this.#salesmanTargetId;
  }

  toModel() {
    return {
      salesmanTargetId: this.#salesmanTargetId,
      companyParentId: this.#companyParentId,
      salesmanId: this.#salesmanId,
      productId: this.#productId,
      productValue: this.#productValue,
      productQty: this.#productQty,
      categoryId: this.#categoryId,
      categoryValue: this.#categoryValue,
      brandId: this.#categoryQty,
      brandId: this.#brandId,
      brandValue: this.#brandValue,
      brandQty: this.#brandQty,
      ...super.toModel()
    };
  }
}

export { SalesmanDto, SalesmanCommisionDto, SalesmanTargetDto };

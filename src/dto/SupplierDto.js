import StandardDto from './StandardDto.js';

class SupplierDto extends StandardDto {
  #supplierId;
  #companyId;
  #companyParentId;
  #supplierCode;
  #supplierName;
  #supplierNickName;
  #supplierClass;
  #supplierAddr;
  #supplierCountryId;
  #supplierProvinceId;
  #supplierCityId;
  #supplierDistrictId;
  #supplierSubdistrictId;
  #supplierPostalCode;
  #supplierPhone;
  #supplierOwner;
  #currencyId;
  #nib;
  #nppbkc;
  #siupmb;
  #salesmanId;
  #supplierTypeId;
  #supplierGroupId;
  #supplierSegmentationId;
  #supplierRegionId;
  #paymentTermId;
  #saldo;
  #note;
  #typeSupplier;

  constructor(dto) {
    super(dto);
    this.#supplierId = dto.supplier_id;
    this.#companyId = dto.company_id;
    this.#companyParentId = dto.company_parent_id;
    this.#supplierCode = dto.supplier_code;
    this.#supplierName = dto.supplier_name;
    this.#supplierNickName = dto.supplier_nick_name;
    this.#supplierClass = dto.supplier_class;
    this.#supplierAddr = dto.supplier_addr;
    this.#supplierCountryId = dto.supplier_country_id;
    this.#supplierProvinceId = dto.supplier_province_id;
    this.#supplierCityId = dto.supplier_city_id;
    this.#supplierDistrictId = dto.supplier_district_id;
    this.#supplierSubdistrictId = dto.supplier_subdistrict_id;
    this.#supplierPostalCode = dto.supplier_postal_code;
    this.#supplierPhone = dto.supplier_phone;
    this.#supplierOwner = dto.supplier_owner;
    this.#currencyId = dto.currency_id;
    this.#nib = dto.nib;
    this.#nppbkc = dto.nppbkc;
    this.#siupmb = dto.siupmb;
    this.#salesmanId = dto.salesman_id;
    this.#supplierTypeId = dto.supplier_type_id;
    this.#supplierGroupId = dto.supplier_group_id;
    this.#supplierSegmentationId = dto.supplier_segmentation_id;
    this.#supplierRegionId = dto.supplier_region_id;
    this.#paymentTermId = dto.payment_term_id;
    this.#saldo = dto.saldo;
    this.#note = dto.note;
    this.#typeSupplier = dto.type_supplier;
  }

  get supplierId() {
    return this.#supplierId;
  }

  toModel() {
    return {
      supplierId: this.#supplierId,
      companyId: this.#companyId,
      companyParentId: this.#companyParentId,
      supplierCode: this.#supplierCode,
      supplierName: this.#supplierName,
      supplierNickName: this.#supplierNickName,
      supplierClass: this.#supplierClass,
      supplierAddr: this.#supplierAddr,
      supplierCountryId: this.#supplierCountryId,
      supplierProvinceId: this.#supplierProvinceId,
      supplierCityId: this.#supplierCityId,
      supplierDistrictId: this.#supplierDistrictId,
      supplierSubdistrictId: this.#supplierSubdistrictId,
      supplierPostalCode: this.#supplierPostalCode,
      supplierPhone: this.#supplierPhone,
      supplierOwner: this.#supplierOwner,
      currencyId: this.#currencyId,
      nib: this.#nib,
      nppbkc: this.#nppbkc,
      siupmb: this.#siupmb,
      salesmanId: this.#salesmanId,
      supplierTypeId: this.#supplierTypeId,
      supplierGroupId: this.#supplierGroupId,
      supplierSegmentationId: this.#supplierSegmentationId,
      supplierRegionId: this.#supplierRegionId,
      paymentTermId: this.#paymentTermId,
      saldo: this.#saldo,
      note: this.#note,
      typeSupplier: this.#typeSupplier,
      ...super.toModel()
    };
  }
}

class SupplierBankDto extends StandardDto {
  #bankSupplierId;
  #bankId;
  #companyParentId;
  #companyId;
  #bankSupplierCode;
  #bankSupplierName;
  #branch;
  #accountNumber;
  #currencyId;

  constructor(dto) {
    super(dto);
    this.#bankSupplierId = dto.bank_supplier_id;
    this.#bankId = dto.bank_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#bankSupplierCode = dto.bank_supplier_code;
    this.#bankSupplierName = dto.bank_supplier_name;
    this.#branch = dto.branch;
    this.#accountNumber = dto.account_number;
    this.#currencyId = dto.currency_id;
  }

  get bankSupplierId() {
    return this.#bankSupplierId;
  }

  toModel() {
    return {
      bankSupplierId: this.#bankSupplierId,
      companyParentId: this.#companyParentId,
      bankId: this.#bankId,
      companyId: this.#companyId,
      bankSupplierCode: this.#bankSupplierCode,
      bankSupplierName: this.#bankSupplierName,
      branch: this.#branch,
      accountNumber: this.#accountNumber,
      levcurrencyIdel: this.#currencyId,
      ...super.toModel()
    };
  }
}

class SupplierBrandDto extends StandardDto {
  #supplierBrandId;
  #supplierId;
  #brandId;

  constructor(dto) {
    super(dto);
    this.#supplierBrandId = dto.supplier_brand_id;
    this.#supplierId = dto.supplier_id;
    this.#brandId = dto.brand_id;
  }

  get supplierBrandId() {
    return this.#supplierBrandId;
  }

  toModel() {
    return {
      supplierBrandId: this.#supplierBrandId,
      supplierId: this.#supplierId,
      brandId: this.#brandId,
      ...super.toModel()
    };
  }
}

class SupplierContactDto extends StandardDto {
  #supplierContactId;
  #companyParentId;
  #supplierId;
  #supplierContactName;
  #supplierContactPosition;
  #supplierContactEmail;
  #countryCode;
  #supplierContactPhone;
  #status;
  #note;
  #isdefault;
  #isdel;
  #phoneType;

  constructor(dto) {
    super(dto);
    this.#supplierContactId = dto.supplier_contact_id;
    this.#companyParentId = dto.company_parent_id;
    this.#supplierId = dto.supplier_id;
    this.#supplierContactName = dto.supplier_contact_name;
    this.#supplierContactPosition = dto.supplier_contact_position;
    this.#supplierContactEmail = dto.supplier_contact_email;
    this.#countryCode = dto.country_code;
    this.#supplierContactPhone = dto.supplier_contact_phone;
    this.#status = dto.status;
    this.#note = dto.note;
    this.#isdefault = dto.isdefault;
    this.#isdel = dto.isdel;
    this.#phoneType = dto.phone_type;
  }

  get supplierContactId() {
    return this.#supplierContactId;
  }

  toModel() {
    return {
      supplierContactId: this.#supplierContactId,
      companyParentId: this.#companyParentId,
      supplierId: this.#supplierId,
      supplierContactName: this.#supplierContactName,
      supplierContactPosition: this.#supplierContactPosition,
      supplierContactEmail: this.#supplierContactEmail,
      supplierContactPosition: this.#countryCode,
      supplierContactPhone: this.#supplierContactPhone,
      status: this.#status,
      note: this.#note,
      isdefault: this.#isdefault,
      isdel: this.#isdel,
      phoneType: this.#phoneType,
      ...super.toModel()
    };
  }
}

class SupplierGroupDto extends StandardDto {
  #supplierGroupId;
  #companyParentId;
  #supplierGroupCode;
  #supplierGroupName;

  constructor(dto) {
    super(dto);
    this.#supplierGroupId = dto.supplier_group_id;
    this.#companyParentId = dto.company_parent_id;
    this.#supplierGroupCode = dto.supplier_group_code;
    this.#supplierGroupName = dto.supplier_group_name;
  }

  get supplierGroupId() {
    return this.#supplierGroupId;
  }

  toModel() {
    return {
      supplierGroupId: this.#supplierGroupId,
      companyParentId: this.#companyParentId,
      supplierGroupCode: this.#supplierGroupCode,
      supplierGroupName: this.#supplierGroupName,
      ...super.toModel()
    };
  }
}

class SupplierPaymentDto extends StandardDto {
  #supplierPaymentId;
  #companyParentId;
  #supplierId;
  #bankId;
  #bankAccountName;
  #bankAccountNo;
  #branch;
  #bankAddr;
  #countryId;
  #swiftCode;
  #iban;
  #pic;
  #isdel;

  constructor(dto) {
    super(dto);
    this.#supplierPaymentId = dto.supplier_payment_id;
    this.#companyParentId = dto.company_parent_id;
    this.#supplierId = dto.supplier_id;
    this.#bankId = dto.bank_id;
    this.#bankAccountName = dto.bank_account_name;
    this.#bankAccountNo = dto.bank_account_no;
    this.#branch = dto.branch;
    this.#bankAddr = dto.bank_addr;
    this.#countryId = dto.country_id;
    this.#swiftCode = dto.swift_code;
    this.#iban = dto.isban;
    this.#pic = dto.pic;
    this.#isdel = dto.isdel;
  }

  get supplierPaymentId() {
    return this.#supplierPaymentId;
  }

  toModel() {
    return {
      supplierPaymentId: this.#supplierPaymentId,
      companyParentId: this.#companyParentId,
      supplierId: this.#supplierId,
      bankId: this.#bankId,
      bankAccountName: this.#bankAccountName,
      bankAccountNo: this.#bankAccountNo,
      branch: this.#branch,
      bankAddr: this.#bankAddr,
      countryId: this.#countryId,
      swiftCode: this.#swiftCode,
      iban: this.#iban,
      pic: this.#pic,
      isdel: this.#isdel,
      ...super.toModel()
    };
  }
}

class SupplierPurchaseDto extends StandardDto {
  #supplierPurchaseId;
  #companyParentId;
  #salesmanId;
  #supplierId;
  #supplierTypeId;
  #supplierGroupId;
  #supplierSegmentationId;
  #supplierRegionId;
  #paymentTermId;
  #currencyId;
  #creditLimit;
  #isdel;

  constructor(dto) {
    super(dto);
    this.#supplierPurchaseId = dto.supplier_purchase_id;
    this.#companyParentId = dto.company_parent_id;
    this.#salesmanId = dto.salesman_id;
    this.#supplierId = dto.supplier_id;
    this.#supplierTypeId = dto.supplier_type_id;
    this.#supplierGroupId = dto.supplier_group_id;
    this.#supplierSegmentationId = dto.supplier_segmentation_id;
    this.#supplierRegionId = dto.supplier_region_id;
    this.#paymentTermId = dto.payment_term_id;
    this.#currencyId = dto.currency_id;
    this.#creditLimit = dto.credit_limit;
    this.#isdel = dto.isdel;
  }

  get supplierPurchaseId() {
    return this.#supplierPurchaseId;
  }

  toModel() {
    return {
      supplierPurchaseId: this.#supplierPurchaseId,
      companyParentId: this.#companyParentId,
      salesmanId: this.#salesmanId,
      supplierId: this.#supplierId,
      supplierTypeId: this.#supplierTypeId,
      supplierGroupId: this.#supplierGroupId,
      supplierSegmentationId: this.#supplierSegmentationId,
      supplierRegionId: this.#supplierRegionId,
      paymentTermId: this.#paymentTermId,
      currencyId: this.#currencyId,
      creditLimit: this.#creditLimit,
      isdel: this.#isdel,
      ...super.toModel()
    };
  }
}

class SupplierRegionDto extends StandardDto {
  #supplierRegionId;
  #companyParentId;
  #supplierRegionCode;
  #supplierRegionName;

  constructor(dto) {
    super(dto);
    this.#supplierRegionId = dto.supplier_region_id;
    this.#companyParentId = dto.company_parent_id;
    this.#supplierRegionCode = dto.supplier_region_code;
    this.#supplierRegionName = dto.supplier_region_name;
  }

  get supplierRegionId() {
    return this.#supplierRegionId;
  }

  toModel() {
    return {
      supplierRegionId: this.#supplierRegionId,
      companyParentId: this.#companyParentId,
      supplierRegionCode: this.#supplierRegionCode,
      supplierRegionName: this.#supplierRegionName,
      ...super.toModel()
    };
  }
}

class SupplierSegmentationDto extends StandardDto {
  #supplierSegmentationId;
  #parentId;
  #levelSegmentation;
  #companyParentId;
  #supplierSegmentationCode;
  #supplierSegmentationName;

  constructor(dto) {
    super(dto);
    this.#supplierSegmentationId = dto.supplier_segmentation_id;
    this.#parentId = dto.parent_id;
    this.#levelSegmentation = dto.level_segmentation;
    this.#companyParentId = dto.company_parent_id;
    this.#supplierSegmentationCode = dto.supplier_segmentation_code;
    this.#supplierSegmentationName = dto.supplier_segmentation_name;
  }

  get supplierSegmentationId() {
    return this.#supplierSegmentationId;
  }

  toModel() {
    return {
      supplierSegmentationId: this.#supplierSegmentationId,
      parentId: this.#parentId,
      levelSegmentation: this.#levelSegmentation,
      companyParentId: this.#companyParentId,
      supplierSegmentationCode: this.#supplierSegmentationCode,
      supplierSegmentationName: this.#supplierSegmentationName,
      ...super.toModel()
    };
  }
}

class SupplierTaxDto extends StandardDto {
  #supplierTaxId;
  #companyParentId;
  #supplierId;
  #npwpName;
  #npwp;
  #pkp;
  #supplierTaxAddr;
  #supplierTaxCountryId;
  #supplierTaxProvinceId;
  #supplierTaxPostalCode;
  #supplierTaxPhone;
  #countryCode;
  #isdefault;
  #isdel;
  #pic;

  constructor(dto) {
    super(dto);
    this.#supplierTaxId = dto.supplier_tax_id;
    this.#companyParentId = dto.company_parent_id;
    this.#supplierId = dto.supplier_id;
    this.#npwpName = dto.npwp_name;
    this.#npwp = dto.npwp;
    this.#pkp = dto.pkp;
    this.#supplierTaxAddr = dto.supplier_tax_addr;
    this.#supplierTaxCountryId = dto.supplier_tax_country_id;
    this.#supplierTaxProvinceId = dto.supplier_tax_province_id;
    this.#supplierTaxPostalCode = dto.supplier_tax_postal_code;
    this.#supplierTaxPhone = dto.supplier_tax_phone;
    this.#countryCode = dto.country_code;
    this.#isdefault = dto.isdefault;
    this.#isdel = dto.isdel;
    this.#pic = dto.pic;
  }

  get supplierTaxId() {
    return this.#supplierTaxId;
  }

  toModel() {
    return {
      supplierTaxId: this.#supplierTaxId,
      companyParentId: this.#companyParentId,
      supplierId: this.#supplierId,
      npwpName: this.#npwpName,
      npwp: this.#npwp,
      pkp: this.#pkp,
      supplierTaxAddr: this.#supplierTaxAddr,
      supplierTaxCountryId: this.#supplierTaxCountryId,
      supplierTaxProvinceId: this.#supplierTaxProvinceId,
      supplierTaxPostalCode: this.#supplierTaxPostalCode,
      supplierTaxPhone: this.#supplierTaxPhone,
      countryCode: this.#countryCode,
      isdefault: this.#isdefault,
      isdel: this.#isdel,
      pic: this.#pic,
      ...super.toModel()
    };
  }
}

class SupplierTypeDto extends StandardDto {
  #supplierTypeId;
  #companyParentId;
  #supplierTypeCode;
  #supplierTypeName;

  constructor(dto) {
    super(dto);
    this.#supplierTypeId = dto.supplier_type_id;
    this.#companyParentId = dto.company_parent_id;
    this.#supplierTypeCode = dto.supplier_type_code;
    this.#supplierTypeName = dto.supplier_type_name;
  }

  get supplierTypeId() {
    return this.#supplierTypeId;
  }

  toModel() {
    return {
      supplierTypeId: this.#supplierTypeId,
      companyParentId: this.#companyParentId,
      supplierTypeCode: this.#supplierTypeCode,
      supplierTypeName: this.#supplierTypeName,
      ...super.toModel()
    };
  }
}

export {
  SupplierBankDto,
  SupplierDto,
  SupplierBrandDto,
  SupplierContactDto,
  SupplierGroupDto,
  SupplierPaymentDto,
  SupplierPurchaseDto,
  SupplierRegionDto,
  SupplierSegmentationDto,
  SupplierTaxDto,
  SupplierTypeDto
};

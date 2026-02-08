import StandardDto from './StandardDto.js';

class CustomerDto extends StandardDto {
  #customerId;
  #coretaxTransactionCodeId;
  #companyParentId;
  #companyId;
  #type;
  #customerGroupId;
  #coretaxJenisPembeliId;
  #customerTypeId;
  #customerSegmentationId;
  #customerRegionId;
  #customerCodeXt;
  #customerCode;
  #customerName;
  #outlateName;
  #customerNickName;
  #customerClass;
  #hubunganUsaha;
  #hubunganUsahaDetail;
  #lamaUsahaType;
  #lamaUsaha;
  #lamaHubungan;
  #bidangUsaha;
  #tempatLahir;
  #tanggalLahir;
  #gender;
  #marriedStatus;
  #citizenship;
  #citizenshipDetail;
  #ktpPassport;
  #ktpPassportValidDate;
  #customerAddr;
  #customerCountryId;
  #customerProvinceId;
  #customerCityId;
  #customerDistrictId;
  #customerSubdistrictId;
  #customerPostalCode;
  #customerPhone;
  #countryCode;
  #customerAddr2;
  #customerCountryId2;
  #customerProvinceId2;
  #customerCityId2;
  #customerDistrictId2;
  #customerSubdistrictId2;
  #customerPostalCode2;
  #customerCitizenshipCountryId;
  #customerOwner;
  #note;
  #status;
  #typeCustomer;

  constructor(dto) {
    super(dto);
    this.#customerId = dto.customer_id;
    this.#coretaxTransactionCodeId = dto.coretax_transaction_code_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#type = dto.type;
    this.#customerGroupId = dto.customer_group_id;
    this.#coretaxJenisPembeliId = dto.coretax_jenis_pembeli_id;
    this.#customerTypeId = dto.customer_type_id;
    this.#customerSegmentationId = dto.customer_segmentation_id;
    this.#customerRegionId = dto.customer_region_id;
    this.#customerCodeXt = dto.customer_code_xt;
    this.#customerCode = dto.customer_code;
    this.#customerName = dto.customer_name;
    this.#outlateName = dto.outlate_name;
    this.#customerNickName = dto.customer_nick_name;
    this.#customerClass = dto.customer_class;
    this.#hubunganUsaha = dto.hubungan_usaha;
    this.#hubunganUsahaDetail = dto.hubungan_usaha_detail;
    this.#lamaUsahaType = dto.lama_usaha_type;
    this.#lamaUsaha = dto.lama_usaha;
    this.#lamaHubungan = dto.lama_hubungan
    this.#bidangUsaha = dto.bidang_usaha;
    this.#tempatLahir = dto.tempat_lahir;
    this.#tanggalLahir = dto.tanggal_lahir;
    this.#gender = dto.gender;
    this.#marriedStatus = dto.married_status;
    this.#citizenship = dto.citizenship;
    this.#citizenshipDetail = dto.citizenship_detail;
    this.#ktpPassport = dto.ktp_passport;
    this.#ktpPassportValidDate = dto.ktp_passport_valid_date;
    this.#customerAddr = dto.customer_addr;
    this.#customerCountryId = dto.customer_country_id;
    this.#customerProvinceId = dto.customer_province_id;
    this.#customerCityId = dto.customer_city_id;
    this.#customerDistrictId = dto.customer_district_id;
    this.#customerSubdistrictId = dto.customer_subdistrict_id;
    this.#customerPostalCode = dto.customer_postal_code;
    this.#customerPhone = dto.customer_phone;
    this.#countryCode = dto.country_code;
    this.#customerAddr2 = dto.customer_addr_2;
    this.#customerCountryId2 = dto.customer_country_id_2;
    this.#customerProvinceId2 = dto.customer_province_id_2;
    this.#customerCityId2 = dto.customer_city_id_2;
    this.#customerDistrictId2 = dto.customer_district_id_2;
    this.#customerSubdistrictId2 = dto.customer_subdistrict_id_2;
    this.#customerPostalCode2 = dto.customer_postal_code_2;
    this.#customerCitizenshipCountryId = dto.customer_citizenship_country_id;
    this.#customerOwner = dto.customer_owner;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#typeCustomer = dto.type_customer;
  }

  get customerId() {
    return this.#customerId;
  }

  toModel() {
    return {
      customerId: this.#customerId,
      coretaxTransactionCodeId: this.#coretaxTransactionCodeId,
      companyParentId: this.#companyParentId,
      companyId: this.#companyId,
      type: this.#type,
      customerGroupId: this.#customerGroupId,
      coretaxJenisPembeliId: this.#coretaxJenisPembeliId,
      customerTypeId: this.#customerTypeId,
      customerSegmentationId: this.#customerSegmentationId,
      customerRegionId: this.#customerRegionId,
      customerCodeXt: this.#customerCodeXt,
      customerCode: this.#customerCode,
      customerName: this.#customerName,
      outlateName: this.#outlateName,
      customerNickName: this.#customerNickName,
      customerClass: this.#customerClass,
      hubunganUsaha: this.#hubunganUsaha,
      hubunganUsahaDetail: this.#hubunganUsahaDetail,
      lamaUsahaType: this.#lamaUsahaType,
      lamaUsaha: this.#lamaUsaha,
      lamaHubungan: this.#lamaHubungan,
      bidangUsaha: this.#bidangUsaha,
      tempatLahir: this.#tempatLahir,
      tanggalLahir: this.#tanggalLahir,
      gender: this.#gender,
      marriedStatus: this.#marriedStatus,
      citizenship: this.#citizenship,
      citizenshipDetail: this.#citizenshipDetail,
      ktpPassport: this.#ktpPassport,
      ktpPassportValidDate: this.#ktpPassportValidDate,
      customerAddr: this.#customerAddr,
      customerCountryId: this.#customerCountryId,
      customerProvinceId: this.#customerProvinceId,
      customerCityId: this.#customerCityId,
      customerDistrictId: this.#customerDistrictId,
      customerSubdistrictId: this.#customerSubdistrictId,
      customerPostalCode: this.#customerPostalCode,
      customerPhone: this.#customerPhone,
      countryCode: this.#countryCode,
      customerAddr2: this.#customerAddr2,
      customerCountryId2: this.#customerCountryId2,
      customerProvinceId2: this.#customerProvinceId2,
      customerCityId2: this.#customerCityId2,
      customerDistrictId2: this.#customerDistrictId2,
      customerSubdistrictId2: this.#customerSubdistrictId2,
      customerPostalCode2: this.#customerPostalCode2,
      customerCitizenshipCountryId: this.#customerCitizenshipCountryId,
      customerOwner: this.#customerOwner,
      note: this.#note,
      status: this.#status,
      typeCustomer: this.#typeCustomer,
      ...super.toModel()
    };
  }
}

class CustomerBillingDto extends StandardDto {
  #customerBillingId;
  #companyParentId;
  #customerId;
  #customerVirtualNo;
  #bankId;
  #accountName;
  #accountNo;
  #branch;
  #isshow;
  #customerBillingAddr;
  #customerBillingCountryId;
  #customerBillingProvinceId;
  #customerBillingPostalCode;
  #customerBillingPhone;
  #countryCode;
  #pic;
  #isdefault;

  constructor(dto) {
    super(dto);
    this.#customerBillingId = dto.customer_billing_id;
    this.#companyParentId = dto.company_parent_id;
    this.#customerId = dto.customer_id;
    this.#customerVirtualNo = dto.customer_virtual_no;
    this.#bankId = dto.bank_id;
    this.#accountName = dto.account_name;
    this.#accountNo = dto.account_no;
    this.#branch = dto.branch;
    this.#isshow = dto.isshow;
    this.#customerBillingAddr = dto.customer_billing_addr;
    this.#customerBillingCountryId = dto.customer_billing_country_id;
    this.#customerBillingProvinceId = dto.customer_billing_province_id;
    this.#customerBillingPostalCode = dto.customer_billing_postal_code;
    this.#customerBillingPhone = dto.customer_billing_phone;
    this.#countryCode = dto.country_code;
    this.#pic = dto.pic;
    this.#isdefault = dto.isdefault;
  }

  get customerBillingId() {
    return this.#customerBillingId;
  }

  toModel() {
    return {
      customerBillingId: this.#customerBillingId,
      companyParentId: this.#companyParentId,
      customerId: this.#customerId,
      customerVirtualNo: this.#customerVirtualNo,
      bankId: this.#bankId,
      accountName: this.#accountName,
      accountNo: this.#accountNo,
      branch: this.#branch,
      isshow: this.#isshow,
      customerBillingAddr: this.#customerBillingAddr,
      customerBillingCountryId: this.#customerBillingCountryId,
      customerBillingProvinceId: this.#customerBillingProvinceId,
      customerBillingPostalCode: this.#customerBillingPostalCode,
      customerBillingPhone: this.#customerBillingPhone,
      countryCode: this.#countryCode,
      pic: this.#pic,
      isdefault: this.#isdefault,
      ...super.toModel()
    };
  }
}

class CustomerCartDto extends StandardDto {
  #customerCartId;
  #customerId;
  #itemId;
  #itemVariantId;
  #qty;

  constructor(dto) {
    super(dto);
    this.#customerCartId = dto.customer_cart_id;
    this.#customerId = dto.customer_id;
    this.#itemId = dto.item_id;
    this.#itemVariantId = dto.item_variant_id;
    this.#qty = dto.qty;
  }

  get customerCartId() {
    return this.#customerCartId;
  }

  toModel() {
    return {
      customerCartId: this.#customerCartId,
      customerId: this.#customerId,
      itemId: this.#itemId,
      itemVariantId: this.#itemVariantId,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}

class CustomerCodeDto extends StandardDto {
  #customerCodeId;
  #resetType;
  #year;
  #month;
  #segmentationCode;
  #currentNumber;

  constructor(dto) {
    super(dto);
    this.#customerCodeId = dto.customer_code_id;
    this.#resetType = dto.reset_type;
    this.#year = dto.year;
    this.#month = dto.month;
    this.#segmentationCode = dto.segmentation_code;
    this.#currentNumber = dto.current_number;
  }

  get customerCodeId() {
    return this.#customerCodeId;
  }

  toModel() {
    return {
      customerCodeId: this.#customerCodeId,
      restType: this.#resetType,
      year: this.#year,
      month: this.#month,
      segmentationCode: this.#segmentationCode,
      currentNumber: this.#currentNumber,
      ...super.toModel()
    };
  }
}

class CustomerContactDto extends StandardDto {
  #customerContactId;
  #companyParentId;
  #customerId;
  #customerContact;
  #customerContactName;
  #customerContactPosition;
  #customerContactEmail;
  #phoneType;
  #countryCode;
  #customerContactPhone;
  #status;
  #note;
  #isdefault;

  constructor(dto) {
    super(dto);
    this.#customerContactId = dto.customer_contact_id;
    this.#companyParentId = dto.company_parent_id;
    this.#customerId = dto.customer_id;
    this.#customerContact = dto.customer_contact;
    this.#customerContactName = dto.customer_contact_name;
    this.#customerContactPosition = dto.customer_contact_position;
    this.#customerContactEmail = dto.customer_contact_email;
    this.#phoneType = dto.phone_type;
    this.#countryCode = dto.country_code;
    this.#customerContactPhone = dto.customer_contact_phone;
    this.#status = dto.status;
    this.#note = dto.note;
    this.#isdefault = dto.isdefault;
  }

  get customerContactId() {
    return this.#customerContactId;
  }

  toModel() {
    return {
      customerContactId: this.#customerContactId,
      companyParentId: this.#companyParentId,
      customerId: this.#customerId,
      customerContact: this.#customerContact,
      customerContactName: this.#customerContactName,
      customerContactPosition: this.#customerContactPosition,
      customerContactEmail: this.#customerContactEmail,
      phoneType: this.#phoneType,
      countryCode: this.#countryCode,
      customerContactPhone: this.#customerContactPhone,
      status: this.#status,
      note: this.#note,
      isdefault: this.#isdefault,
      ...super.toModel()
    };
  }
}

class CustomerDeliveryDto extends StandardDto {
  #customerDeliveryId;
  #companyParentId;
  #customerId;
  #customerDeliveryAddr;
  #customerDeliveryCountryId;
  #customerDeliveryProvinceId;
  #customerDeliveryPostalCode;
  #countryCode;
  #customerDeliveryPhone;
  #pic;
  #isdefault;

  constructor(dto) {
    super(dto);
    this.#customerDeliveryId = dto.customer_delivery_id;
    this.#companyParentId = dto.company_parent_id;
    this.#customerId = dto.customer_id;
    this.#customerDeliveryAddr = dto.customer_delivery_addr;
    this.#customerDeliveryCountryId = dto.customer_delivery_country_id;
    this.#customerDeliveryProvinceId = dto.customer_delivery_province_id;
    this.#customerDeliveryPostalCode = dto.customer_delivery_postal_code;
    this.#countryCode = dto.country_code;
    this.#customerDeliveryPhone = dto.customer_delivery_phone;
    this.#pic = dto.pic;
    this.#isdefault = dto.isdefault;
  }

  get customerDeliveryId() {
    return this.#customerDeliveryId;
  }

  toModel() {
    return {
      customerDeliveryId: this.#customerDeliveryId,
      companyParentId: this.#companyParentId,
      customerId: this.#customerId,
      customerDeliveryAddr: this.#customerDeliveryAddr,
      customerDeliveryCountryId: this.#customerDeliveryCountryId,
      customerDeliveryProvinceId: this.#customerDeliveryProvinceId,
      customerDeliveryPostalCode: this.#customerDeliveryPostalCode,
      countryCode: this.#countryCode,
      customerDeliveryPhone: this.#customerDeliveryPhone,
      pic: this.#pic,
      isdefault: this.#isdefault,
      ...super.toModel()
    };
  }
}

class CustomerDocumentDto extends StandardDto {
  #customerDocumentId;
  #customerId;

  constructor(dto) {
    super(dto);
    this.#customerDocumentId = dto.customer_document_id;
    this.#customerId = dto.customer_id;
  }

  get customerDocumentId() {
    return this.#customerDocumentId;
  }

  toModel() {
    return {
      customerDocumentId: this.#customerDocumentId,
      customerId: this.#customerId,
      ...super.toModel()
    };
  }
}

class CustomerGroupDto extends StandardDto {
  #customerGroupId;
  #companyParentId;
  #customerGroupCode;
  #customerGroupName;

  constructor(dto) {
    super(dto);
    this.#customerGroupId = dto.customer_group_id;
    this.#companyParentId = dto.company_parent_id;
    this.#customerGroupCode = dto.customer_group_code;
    this.#customerGroupName = dto.customer_group_name;
  }

  get customerGroupId() {
    return this.#customerGroupId;
  }

  toModel() {
    return {
      customerGroupId: this.#customerGroupId,
      companyParentId: this.#companyParentId,
      customerGroupCode: this.#customerGroupCode,
      customerGroupName: this.#customerGroupName,
      ...super.toModel()
    };
  }
}

class CustomerImgDto extends StandardDto {
  #customerImgId;
  #companyParentId;
  #customerId;
  #urlImg;

  constructor(dto) {
    super(dto);
    this.#customerImgId = dto.customer_img_id;
    this.#companyParentId = dto.company_parent_id;
    this.#customerId = dto.customer_id;
    this.#urlImg = dto.url_img;
  }

  get customerImgId() {
    return this.#customerImgId;
  }

  toModel() {
    return {
      customerImgId: this.#customerImgId,
      companyParentId: this.#companyParentId,
      customerId: this.#customerId,
      urlImg: this.#urlImg,
      ...super.toModel()
    };
  }
}

class CustomerRegionDto extends StandardDto {
  #customerRegionId;
  #companyParentId;
  #customerRegionCode;
  #customerRegionName;

  constructor(dto) {
    super(dto);
    this.#customerRegionId = dto.customer_region_id;
    this.#companyParentId = dto.company_parent_id;
    this.#customerRegionCode = dto.customer_region_code;
    this.#customerRegionName = dto.customer_region_name;
  }

  get customerRegionId() {
    return this.#customerRegionId;
  }

  toModel() {
    return {
      customerRegionId: this.#customerRegionId,
      companyParentId: this.#companyParentId,
      customerRegionCode: this.#customerRegionCode,
      customerRegionName: this.#customerRegionName,
      ...super.toModel()
    };
  }
}

class CustomerSalesDto extends StandardDto {
  #customerSalesId;
  #companyParentId;
  #customerId;
  #customerTypeId;
  #customerGroupId;
  #customerSegmentationId;
  #customerRegionId;
  #paymentTermId;
  #creditLimit;
  #creditLimitUsed;
  #salesmanId;
  #isconsignment;

  constructor(dto) {
    super(dto);
    this.#customerSalesId = dto.customer_sales_id;
    this.#companyParentId = dto.company_parent_id;
    this.#customerId = dto.customer_id;
    this.#customerTypeId = dto.customer_type_id;
    this.#customerGroupId = dto.customer_group_id;
    this.#customerSegmentationId = dto.customer_segmentation_id;
    this.#customerRegionId = dto.customer_region_id;
    this.#paymentTermId = dto.payment_term_id;
    this.#creditLimit = dto.credit_limit;
    this.#creditLimitUsed = dto.credit_limit_used;
    this.#salesmanId = dto.salesman_id;
    this.#isconsignment = dto.isconsignment;
  }

  get customerSalesId() {
    return this.#customerSalesId;
  }

  toModel() {
    return {
      customerSalesId: this.#customerSalesId,
      companyParentId: this.#companyParentId,
      customerId: this.#customerId,
      customerTypeId: this.#customerTypeId,
      customerGroupId: this.#customerGroupId,
      customerSegmentationId: this.#customerSegmentationId,
      customerRegionId: this.#customerRegionId,
      paymentTermId: this.#paymentTermId,
      creditLimit: this.#creditLimit,
      creditLimitUsed: this.#creditLimitUsed,
      salesmanId: this.#salesmanId,
      isconsignment: this.#isconsignment,
      ...super.toModel()
    };
  }
}

class CustomerSegmentationDto extends StandardDto {
  #customerSegmentationId;
  #companyParentId;
  #parentId;
  #levelSegmentation;
  #customerSegmentationCode;
  #customerSegmentationName;

  constructor(dto) {
    super(dto);
    this.#customerSegmentationId = dto.customer_segmentation_id;
    this.#companyParentId = dto.company_parent_id;
    this.#parentId = dto.parent_id;
    this.#levelSegmentation = dto.level_segmentation;
    this.#customerSegmentationCode = dto.customer_segmentation_code;
    this.#customerSegmentationName = dto.customer_segmentation_name;
  }

  get customerSegmentationId() {
    return this.#customerSegmentationId;
  }

  toModel() {
    return {
      customerSegmentationId: this.#customerSegmentationId,
      companyParentId: this.#companyParentId,
      parentId: this.#parentId,
      levelSegmentation: this.#levelSegmentation,
      customerSegmentationCode: this.#customerSegmentationCode,
      customerSegmentationName: this.#customerSegmentationName,
      ...super.toModel()
    };
  }
}

class CustomerTaxDto extends StandardDto {
  #customerTaxId;
  #companyParentId;
  #customerId;
  #npwpNumber;
  #npwpName;
  #npwpAddr;
  #pkp;
  #ktp;
  #nib;
  #siup;
  #siupDate;
  #nppbkc;
  #nppbkcName;
  #nppbkcDate;
  #nppbkcAddr;
  #tdp;
  #tdpDate;
  #aktaPendirian;
  #aktaPendirianDate;
  #aktaPendirianChanged;
  #aktaPendirianChangedDate;
  #directorName;
  #directorPhone;
  #shareholdersName;
  #shareholdersPhone;
  #customerTaxAddr;
  #customerTaxCountryId;
  #customerTaxProvinceId;
  #customerTaxPostalCode;
  #customerTaxPhone;
  #countryCode;
  #pic;
  #status;
  #isdefault;

  constructor(dto) {
    super(dto);
    this.#customerTaxId = dto.customer_tax_id;
    this.#companyParentId = dto.company_parent_id;
    this.#customerId = dto.customer_id;
    this.#npwpNumber = dto.npwp_number;
    this.#npwpName = dto.npwp_name;
    this.#npwpAddr = dto.npwp_addr;
    this.#pkp = dto.pkp;
    this.#ktp = dto.ktp;
    this.#nib = dto.nib;
    this.#siup = dto.siup;
    this.#siupDate = dto.siup_date;
    this.#nppbkc = dto.nppbkc;
    this.#nppbkcName = dto.nppbkc_name;
    this.#nppbkcDate = dto.nppbkc_date;
    this.#nppbkcAddr = dto.nppbkc_addr;
    this.#tdp = dto.tdp;
    this.#tdpDate = dto.tdp_date;
    this.#aktaPendirian = dto.akta_pendirian;
    this.#aktaPendirianDate = dto.akta_pendirian_date;
    this.#aktaPendirianChanged = dto.akta_pendirian_changed;
    this.#aktaPendirianChangedDate = dto.akta_pendirian_changed_date;
    this.#directorName = dto.director_name;
    this.#directorPhone = dto.director_phone;
    this.#shareholdersName = dto.shareholders_name;
    this.#shareholdersPhone = dto.shareholders_phone;
    this.#customerTaxAddr = dto.customer_tax_addr;
    this.#customerTaxCountryId = dto.customer_tax_country_id;
    this.#customerTaxProvinceId = dto.customer_tax_province_id;
    this.#customerTaxPostalCode = dto.customer_tax_postal_code;
    this.#customerTaxPhone = dto.customer_tax_phone;
    this.#countryCode = dto.country_code;
    this.#pic = dto.pic;
    this.#status = dto.status;
    this.#isdefault = dto.isdefault;
  }

  get customerTaxId() {
    return this.#customerTaxId;
  }

  toModel() {
    return {
      customerTaxId: this.#customerTaxId,
      companyParentId: this.#companyParentId,
      customerId: this.#customerId,
      npwpNumber: this.#npwpNumber,
      npwpName: this.#npwpName,
      npwpAddr: this.#npwpAddr,
      pkp: this.#pkp,
      ktp: this.#ktp,
      nib: this.#nib,
      siup: this.#siup,
      siupDate: this.#siupDate,
      nppbkc: this.#nppbkc,
      nppbkcName: this.#nppbkcName,
      nppbkcDate: this.#nppbkcDate,
      nppbkcAddr: this.#nppbkcAddr,
      tdp: this.#tdp,
      tdpDate: this.#tdpDate,
      aktaPendirian: this.#aktaPendirian,
      aktaPendirianDate: this.#aktaPendirianDate,
      aktaPendirianChanged: this.#aktaPendirianChanged,
      aktaPendirianChangedDate: this.#aktaPendirianChangedDate,
      directorName: this.#directorName,
      directorPhone: this.#directorPhone,
      shareholdersName: this.#shareholdersName,
      shareholdersPhone: this.#shareholdersPhone,
      customerTaxAddr: this.#customerTaxAddr,
      customerTaxCountryId: this.#customerTaxCountryId,
      customerTaxProvinceId: this.#customerTaxProvinceId,
      customerTaxPostalCode: this.#customerTaxPostalCode,
      customerTaxPhone: this.#customerTaxPhone,
      countryCode: this.#countryCode,
      pic: this.#pic,
      status: this.#status,
      isdefault: this.#isdefault,
      ...super.toModel()
    };
  }
}

class CustomerTypeDto extends StandardDto {
  #customerTypeId;
  #companyParentId;
  #customerTypeCode;
  #customerTypeName;
  #posisi;
  #isdefault;

  constructor(dto) {
    super(dto);
    this.#customerTypeId = dto.customer_type_id;
    this.#companyParentId = dto.company_parent_id;
    this.#customerTypeCode = dto.customer_type_code;
    this.#customerTypeName = dto.customer_type_name;
    this.#posisi = dto.posisi;
    this.#isdefault = dto.isdefault;
  }

  get customerTypeId() {
    return this.#customerTypeId;
  }

  toModel() {
    return {
      customerTypeId: this.#customerTypeId,
      companyParentId: this.#companyParentId,
      customerTypeCode: this.#customerTypeCode,
      customerTypeName: this.#customerTypeName,
      posisi: this.#posisi,
      isdefault: this.#isdefault,
      ...super.toModel()
    };
  }
}

export {
  CustomerBillingDto,
  CustomerCartDto,
  CustomerCodeDto,
  CustomerContactDto,
  CustomerDeliveryDto,
  CustomerDocumentDto,
  CustomerDto,
  CustomerGroupDto,
  CustomerImgDto,
  CustomerRegionDto,
  CustomerSalesDto,
  CustomerSegmentationDto,
  CustomerTaxDto,
  CustomerTypeDto
};

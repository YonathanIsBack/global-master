import StandardDto from "../StandardDto.js";

class CoretaxCategoryDto extends StandardDto {
  #coretaxCategoryId;
  #coretaxCategoryCode;
  #coretaxCategoryName;

  constructor(body) {
    super(body);
    this.#coretaxCategoryId = body.coretax_category_id;
    this.#coretaxCategoryCode = body.coretax_category_code;
    this.#coretaxCategoryName = body.coretax_category_name;
  }

  get coretaxCategoryId() {
    return this.#coretaxCategoryId;
  }

  toModel() {
    return {
      coretaxCategoryId: this.#coretaxCategoryId,
      coretaxCategoryCode: this.#coretaxCategoryCode,
      coretaxCategoryName: this.#coretaxCategoryName,
      ...super.toModel()
    }
  }
}

class CoretaxCountryDto extends StandardDto {
  #coretaxCountryId;
  #coretaxCountryCode;
  #coretaxCountryName;

  constructor(body) {
    super(body);
    this.#coretaxCountryId = body.coretax_country_id;
    this.#coretaxCountryCode = body.coretax_country_code;
    this.#coretaxCountryName = body.coretax_country_name;
  }

  get coretaxCountryId() {
    return this.#coretaxCountryId;
  }

  toModel() {
    return {
      coretaxCountryId: this.#coretaxCountryId,
      coretaxCountryCode: this.#coretaxCountryCode,
      coretaxCountryName: this.#coretaxCountryName,
      ...super.toModel()
    }
  }
}

class CoretaxFacilityDto extends StandardDto {
  #coretaxFacilityId;
  #coretaxTransactionCodeId;
  #coretaxFacilityCode;
  #coretaxFacilityNumber;
  #coretaxFacilityDesc;

  constructor(body) {
    super(body);
    this.#coretaxFacilityId = body.coretax_facility_id;
    this.#coretaxTransactionCodeId = body.coretax_transaction_code_id;
    this.#coretaxFacilityCode = body.coretax_facility_code;
    this.#coretaxFacilityNumber = body.coretax_facility_number;
    this.#coretaxFacilityDesc = body.coretax_facility_desc;
  }

  get coretaxFacilityId() {
    return this.#coretaxFacilityId;
  }

  toModel() {
    return {
      coretaxFacilityId: this.#coretaxFacilityId,
      coretaxTransactionCodeId: this.#coretaxTransactionCodeId,
      coretaxFacilityCode: this.#coretaxFacilityCode,
      coretaxFacilityNumber: this.#coretaxFacilityNumber,
      coretaxFacilityDesc: this.#coretaxFacilityDesc,
      ...super.toModel()
    }
  }
}

class CoretaxInfoDto extends StandardDto {
  #coretaxInfoId;
  #coretaxTransactionCodeId;
  #coretaxInfoCode;
  #coretaxInfoNumber;
  #coretaxInfoDesc;

  constructor(body) {
    super(body);
    this.#coretaxInfoId = body.coretax_info_id;
    this.#coretaxTransactionCodeId = body.coretax_transaction_code_id;
    this.#coretaxInfoCode = body.coretax_info_code;
    this.#coretaxInfoNumber = body.coretax_info_number;
    this.#coretaxInfoDesc = body.coretax_info_desc;
  }

  get coretaxInfoId() {
    return this.#coretaxInfoId;
  }

  toModel() {
    return {
      coretaxInfoId: this.#coretaxInfoId,
      coretaxTransactionCodeId: this.#coretaxTransactionCodeId,
      coretaxInfoCode: this.#coretaxInfoCode,
      coretaxInfoNumber: this.#coretaxInfoNumber,
      coretaxInfoDesc: this.#coretaxInfoDesc,
      ...super.toModel()
    }
  }
}

class CoretaxJenisPembeliDto extends StandardDto {
  #coretaxJenisPembeliId;
  #coretaxJenisPembeliName;
  #coretaxJenisPembeliInfo;

  constructor(body) {
    super(body);
    this.#coretaxJenisPembeliId = body.coretax_jenis_pembeli_id;
    this.#coretaxJenisPembeliName = body.coretax_jenis_pembeli_name;
    this.#coretaxJenisPembeliInfo = body.coretax_jenis_pembeli_info;
  }

  get coretaxJenisPembeliId() {
    return this.#coretaxJenisPembeliId;
  }

  toModel() {
    return {
      coretaxJenisPembeliId: this.#coretaxJenisPembeliId,
      coretaxJenisPembeliName: this.#coretaxJenisPembeliName,
      coretaxJenisPembeliInfo: this.#coretaxJenisPembeliInfo,
      ...super.toModel()
    }
  }
}

class CoretaxTaxDto extends StandardDto {
  #coretaxTaxId;
  #coretaxTaxName;
  #percentage;
  #note;
  #isdefault;

  constructor(body) {
    super(body);
    this.#coretaxTaxId = body.coretax_tax_id;
    this.#coretaxTaxName = body.coretax_tax_name;
    this.#percentage = body.percentage;
    this.#note = body.note;
    this.#isdefault  = body.isdefault;
  }

  get coretaxTaxId() {
    return this.#coretaxTaxId;
  }

  toModel() {
    return {
      coretaxTaxId: this.#coretaxTaxId,
      coretaxTaxName: this.#coretaxTaxName,
      percentage: this.#percentage,
      note: this.#note,
      isdefault: this.#isdefault,
      ...super.toModel()
    }
  }
}

class CoretaxTransactionCodeDto extends StandardDto {
  #coretaxTransactionCodeId;
  #coretaxTransactionCode
  #coretaxTransactionNumber
  #coretaxTransactionDesc

  constructor(body) {
    super(body);
    this.#coretaxTransactionCodeId = body.coretax_transaction_code_id;
    this.#coretaxTransactionCode = body.coretax_transaction_code;
    this.#coretaxTransactionNumber = body.coretax_transaction_number;
    this.#coretaxTransactionDesc = body.coretax_transaction_desc;
  }

  get coretaxTransactionCodeId() {
    return this.#coretaxTransactionCodeId;
  }

  toModel() {
    return {
      coretaxTransactionCodeId: this.#coretaxTransactionCodeId,
      coretaxTransactionCode: this.#coretaxTransactionCode,
      coretaxTransactionNumber: this.#coretaxTransactionNumber,
      coretaxTransactionDesc: this.#coretaxTransactionDesc,
      ...super.toModel()
    }
  }
}

class CoretaxTypeDto extends StandardDto {
  #coretaxTypeId;
  #coretaxTypeCode;
  #coretaxTypeName;
  #isdefault;

  constructor(body) {
    super(body);
    this.#coretaxTypeId = body.coretax_type_id;
    this.#coretaxTypeCode = body.coretax_type_code;
    this.#coretaxTypeName = body.coretax_type_name;
    this.#isdefault = body.isdefault;
  }

  get coretaxTypeId() {
    return this.#coretaxTypeId;
  }

  toModel() {
    return {
      coretaxTypeId: this.#coretaxTypeId,
      coretaxTypeCode: this.#coretaxTypeCode,
      coretaxTypeName: this.#coretaxTypeName,
      isdefault: this.#isdefault,
      ...super.toModel()
    }
  }
}

class CoretaxUomDto extends StandardDto {
  #coretaxUomId;
  #coretaxUomCode;
  #coretaxUomName;
  #isservice;

  constructor(body) {
    super(body);
    this.#coretaxUomId = body.coretax_uom_id;
    this.#coretaxUomCode = body.coretax_uom_code;
    this.#coretaxUomName = body.coretax_uom_name;
    this.#isservice = body.isservice;
  }

  get coretaxUomId() {
    return this.#coretaxUomId;
  }

  toModel() {
    return {
      coretaxUomId: this.#coretaxUomId,
      coretaxUomCode: this.#coretaxUomCode,
      coretaxUomName: this.#coretaxUomName,
      isservice: this.#isservice,
      ...super.toModel()
    }
  }
}

export {
  CoretaxCategoryDto,
  CoretaxCountryDto,
  CoretaxFacilityDto,
  CoretaxInfoDto,
  CoretaxJenisPembeliDto,
  CoretaxTaxDto,
  CoretaxTransactionCodeDto,
  CoretaxTypeDto,
  CoretaxUomDto,
};
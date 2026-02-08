import StandardDto from './StandardDto.js';

class CoaDto extends StandardDto {
  #coaId;
  #coaParentId;
  #coaCode;
  #coaName;
  #coaTypeId;
  #coaSubGroupId;
  #coaLinkId;
  #isledger;
  #level;
  #reportType;
  #isactiva;
  #normalBalance;
  #isbank;
  #isused;
  #isunder;
  #isupdateXls;

  constructor(dto) {
    super(dto);
    this.#coaId = dto.coa_id;
    this.#coaParentId = dto.coa_parent_id;
    this.#coaCode = dto.coa_code;
    this.#coaName = dto.coa_name;
    this.#coaTypeId = dto.coa_type_id;
    this.#coaSubGroupId = dto.coa_sub_group_id;
    this.#coaLinkId = dto.coa_link_id;
    this.#isledger = dto.isledger;
    this.#level = dto.level;
    this.#reportType = dto.report_type;
    this.#isactiva = dto.isactiva;
    this.#normalBalance = dto.normal_balance;
    this.#isbank = dto.isbank;
    this.#isused = dto.isused;
    this.#isunder = dto.isunder;
    this.#isupdateXls = dto.isupdate_xls;
  }

  get coaId() {
    return this.#coaId;
  }

  toModel() {
    return {
      coaId: this.#coaId,
      coaParentId: this.#coaParentId,
      coaCode: this.#coaCode,
      coaName: this.#coaName,
      coaTypeId: this.#coaTypeId,
      coaSubGroupId: this.#coaSubGroupId,
      coaLinkId: this.#coaLinkId,
      isledger: this.#isledger,
      level: this.#level,
      reportType: this.#reportType,
      isactiva: this.#isactiva,
      normalBalance: this.#normalBalance,
      isbank: this.#isbank,
      isused: this.#isused,
      isunder: this.#isunder,
      isupdateXls: this.#isupdateXls,
      ...super.toModel()
    };
  }
}

class CoaBankDto extends StandardDto {
  #coaBankId;
  #bankId;
  #companyParentId;
  #coaId;
  #coaBankCode;
  #coaBankName;
  #branch;
  #accountNumber;
  #currencyId;

  constructor(dto) {
    super(dto);
    this.#coaBankId = dto.coa_bank_id;
    this.#bankId = dto.bank_id;
    this.#companyParentId = dto.company_parent_id;
    this.#coaId = dto.coa_id;
    this.#coaBankCode = dto.coa_bank_code;
    this.#coaBankName = dto.coa_bank_name;
    this.#branch = dto.branch;
    this.#accountNumber = dto.account_number;
    this.#currencyId = dto.currency_id;
  }

  get coaBankId() {
    return this.#coaBankId;
  }

  toModel() {
    return {
      coaBankId: this.#coaBankId,
      companyParentId: this.#companyParentId,
      bankId: this.#bankId,
      coaId: this.#coaId,
      coaBankCode: this.#coaBankCode,
      coaBankName: this.#coaBankName,
      branch: this.#branch,
      accountNumber: this.#accountNumber,
      levcurrencyIdel: this.#currencyId,
      ...super.toModel()
    };
  }
}

class CoaGroupDto extends StandardDto {
  #coaGroupId;
  #companyParentId;
  #coaGroupParentId;
  #coaGroupCode;
  #coaGroupName;
  #coaTypeId;

  constructor(dto) {
    super(dto);
    this.#coaGroupId = dto.coa_group_id;
    this.#companyParentId = dto.company_parent_id;
    this.#coaGroupParentId = dto.coa_group_parent_id;
    this.#coaGroupCode = dto.coa_group_code;
    this.#coaTypeId = dto.coa_type_id;
    this.#coaGroupName = dto.coa_group_name;
    this.#coaTypeId = dto.coa_type_id;
  }

  get coaGroupId() {
    return this.#coaGroupId;
  }

  toModel() {
    return {
      coaGroupId: this.#coaGroupId,
      companyParentId: this.#companyParentId,
      coaGroupParentId: this.#coaGroupParentId,
      coaGroupCode: this.#coaGroupCode,
      coaTypeId: this.#coaTypeId,
      coaGroupName: this.#coaGroupName,
      coaTypeId: this.#coaTypeId,
      ...super.toModel()
    };
  }
}

class CoaSubGroupDto extends StandardDto {
  #coaSubGroupId;
  #companyParentId;
  #coaSubGroupCode;
  #coaSubGroupName;
  #coaTypeId;

  constructor(dto) {
    super(dto);
    this.#coaSubGroupId = dto.coa_sub_group_id;
    this.#companyParentId = dto.company_parent_id;
    this.#coaSubGroupCode = dto.coa_sub_group_code;
    this.#coaSubGroupName = dto.coa_sub_group_name;
    this.#coaTypeId = dto.coa_type_id;
  }

  get coaSubGroupId() {
    return this.#coaSubGroupId;
  }

  toModel() {
    return {
      coaSubGroupId: this.#coaSubGroupId,
      companyParentId: this.#companyParentId,
      coaSubGroupCode: this.#coaSubGroupCode,
      coaSubGroupName: this.#coaSubGroupName,
      coaTypeId: this.#coaTypeId,
      ...super.toModel()
    };
  }
}

class CoaTypeDto extends StandardDto {
  #coaTypeId;
  #companyParentId;
  #coaTypeCode;
  #coaTypeName;

  constructor(dto) {
    super(dto);
    this.#coaTypeId = dto.coa_type_id;
    this.#companyParentId = dto.company_parent_id;
    this.#coaTypeCode = dto.coa_type_code;
    this.#coaTypeName = dto.coa_type_name;
  }

  get coaTypeId() {
    return this.#coaTypeId;
  }

  toModel() {
    return {
      coaTypeId: this.#coaTypeId,
      companyParentId: this.#companyParentId,
      coaTypeCode: this.#coaTypeCode,
      coaTypeName: this.#coaTypeName,
      ...super.toModel()
    };
  }
}

export { CoaDto, CoaBankDto, CoaGroupDto, CoaSubGroupDto, CoaTypeDto };

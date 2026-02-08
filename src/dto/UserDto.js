import StandardDto from './StandardDto.js';

class UserDto extends StandardDto {
  #userId;
  #companyParentId;
  #userGroupId;
  #userCode;
  #username;
  #telegramUsername;
  #telegramChatId;
  #password;
  #passwordApprove;
  #initial;
  #userBirthdate;
  #userPhone;
  #userGender;
  #userEmail;
  #locationId;
  #stratumId;
  #userFunction;
  #groupId;
  #urlImg;
  #companyId;
  #issettingprice;
  #creditTermId;
  #creditTermLimit;
  #creditLimit;
  #creditLimitUse;
  #ispin;

  constructor(dto) {
    super(dto);
    this.#userId = dto.table_user_id;
    this.#companyParentId = dto.company_parent_id;
    this.#userGroupId = dto.user_group_id;
    this.#userCode = dto.user_code;
    this.#username = dto.username;
    this.#telegramUsername = dto.telegram_username;
    this.#telegramChatId = dto.telegram_chat_id;
    this.#password = dto.password;
    this.#passwordApprove = dto.password_approve;
    this.#initial = dto.initial;
    this.#userBirthdate = dto.user_birthdate;
    this.#userPhone = dto.user_phone;
    this.#userGender = dto.user_gender;
    this.#userEmail = dto.user_email;
    this.#locationId = dto.location_id;
    this.#stratumId = dto.stratum_id;
    this.#userFunction = dto.user_function;
    this.#groupId = dto.group_id;
    this.#urlImg = dto.url_img;
    this.#companyId = dto.company_id;
    this.#issettingprice = dto.issettingprice;
    this.#creditTermId = dto.credit_term_id;
    this.#creditTermLimit = dto.credit_term_limit;
    this.#creditLimit = dto.credit_limit;
    this.#creditLimitUse = dto.credit_limit_used;
    this.#ispin = dto.ispin;
  }

  get userId() {
    return this.#userId;
  }

  toModel() {
    return {
      userId: this.#userId,
      companyParentId: this.#companyParentId,
      userGroupId: this.#userGroupId,
      userCode: this.#userCode,
      username: this.#username,
      telegramUsername: this.#telegramUsername,
      telegramChatId: this.#telegramChatId,
      password: this.#password,
      passwordApprove: this.#passwordApprove,
      initial: this.#initial,
      userBirthdate: this.#userBirthdate,
      userPhone: this.#userPhone,
      userGender: this.#userGender,
      userEmail: this.#userEmail,
      locationId: this.#locationId,
      stratumId: this.#stratumId,
      userFunction: this.#userFunction,
      groupId: this.#groupId,
      urlImg: this.#urlImg,
      companyId: this.#companyId,
      issettingprice: this.#issettingprice,
      creditTermId: this.#creditTermId,
      creditTermLimit: this.#creditTermLimit,
      creditLimit: this.#creditLimit,
      creditLimitUse: this.#creditLimitUse,
      ispin: this.#ispin,
      ...super.toModel()
    };
  }
}

class UserAksesCompanyDto extends StandardDto {
  #userAksesCompanyId;
  #userId;
  #companyId;
  #userLocalId;

  constructor(dto) {
    super(dto);
    this.#userAksesCompanyId = dto.user_akses_company_id;
    this.#userId = dto.user_id;
    this.#companyId = dto.company_id;
    this.#userLocalId = dto.user_local_id;
  }

  get userAksesCompanyId() {
    return this.#userAksesCompanyId;
  }

  toModel() {
    return {
      userAksesCompanyId: this.#userAksesCompanyId,
      userId: this.#userId,
      companyId: this.#companyId,
      userLocalId: this.#userLocalId,
      companyId: this.#companyId,
      ...super.toModel()
    };
  }
}

class UserCustomerDto extends StandardDto {
  #userCustomerId;
  #userId;
  #customerId;

  constructor(dto) {
    super(dto);
    this.#userCustomerId = dto.user_customer_id;
    this.#userId = dto.user_id;
    this.#customerId = dto.customer_id;
  }

  get userCustomerId() {
    return this.#userCustomerId;
  }

  toModel() {
    return {
      userCustomerId: this.#userCustomerId,
      userId: this.#userId,
      customerId: this.#customerId,
      ...super.toModel()
    };
  }
}

class UserGroupDto extends StandardDto {
  #userGroupId;
  #userId;
  #companyParentId;
  #userGroupName;
  #userAkses;

  constructor(dto) {
    super(dto);
    this.#userGroupId = dto.user_group_id;
    this.#userId = dto.user_id;
    this.#companyParentId = dto.company_parent_id;
    this.#userGroupName = dto.user_group_name;
    this.#userAkses = dto.user_akses;
  }

  get userGroupId() {
    return this.#userGroupId;
  }

  toModel() {
    return {
      userGroupId: this.#userGroupId,
      userId: this.#userId,
      companyParentId: this.#companyParentId,
      userGroupName: this.#userGroupName,
      userAkses: this.#userAkses,
      ...super.toModel()
    };
  }
}

class UserGroupAccessDto extends StandardDto {
  #userGroupAccessId;
  #userGroupId;
  #pageId;
  #actionId;
  #isaccess;

  constructor(dto) {
    super(dto);
    this.#userGroupAccessId = dto.user_group_access_id;
    this.#userGroupId = dto.user_group_id;
    this.#pageId = dto.page_id;
    this.#actionId = dto.action_id;
    this.#isaccess = dto.isaccess;
  }

  get userGroupAccessId() {
    return this.#userGroupAccessId;
  }

  toModel() {
    return {
      userGroupAccessId: this.#userGroupAccessId,
      userGroupId: this.#userGroupId,
      pageId: this.#pageId,
      actionId: this.#actionId,
      isaccess: this.#isaccess,
      ...super.toModel()
    };
  }
}

class UserGroupCustomerDto extends StandardDto {
  #userGroupCustomerId;
  #userGroupId;
  #customerId;
  constructor(dto) {
    super(dto);
    this.#userGroupCustomerId = dto.user_group_customer_id;
    this.#userGroupId = dto.user_group_id;
    this.#customerId = dto.customer_id;
  }

  get userGroupCustomerId() {
    return this.#userGroupCustomerId;
  }

  toModel() {
    return {
      userGroupCustomerId: this.#userGroupCustomerId,
      userGroupId: this.#userGroupId,
      customerId: this.#customerId,
      ...super.toModel()
    };
  }
}

class UserItemDto extends StandardDto {
  #userItemId;
  #userId;
  #itemId;
  constructor(dto) {
    super(dto);
    this.#userItemId = dto.user_item_id;
    this.#userId = dto.userID;
    this.#itemId = dto.item_id;
  }

  get userItemId() {
    return this.#userItemId;
  }

  toModel() {
    return {
      userItemId: this.#userItemId,
      userId: this.#userId,
      itemId: this.#itemId,
      ...super.toModel()
    };
  }
}

class UserOtpDto extends StandardDto {
  #userOtpId;
  #userId;
  #otp;
  #expire;
  #ip;

  constructor(dto) {
    super(dto);
    this.#userOtpId = dto.user_otp_id;
    this.#userId = dto.user_id;
    this.#otp = dto.item_id;
    this.#expire = dto.item_id;
    this.#ip = dto.item_id;
  }

  get userOtpId() {
    return this.#userOtpId;
  }

  toModel() {
    return {
      userOtpId: this.#userOtpId,
      userId: this.#userId,
      otp: this.#otp,
      expire: this.#expire,
      ip: this.#ip,
      ...super.toModel()
    };
  }
}

class UserSalesmanDto extends StandardDto {
  #userSalesmanId;
  #userId;
  #salesmanId;

  constructor(dto) {
    super(dto);
    this.#userSalesmanId = dto.user_salesman_id;
    this.#userId = dto.userID;
    this.#salesmanId = dto.salesman_id;
  }

  get userSalesmanId() {
    return this.#userSalesmanId;
  }

  toModel() {
    return {
      userSalesmanId: this.#userSalesmanId,
      userId: this.#userId,
      salesmanId: this.#salesmanId,
      ...super.toModel()
    };
  }
}

class UserSupplierDto extends StandardDto {
  #userSupplierId;
  #userId;
  #supplierId;

  constructor(dto) {
    super(dto);
    this.#userSupplierId = dto.user_supplier_id;
    this.#userId = dto.user_id;
    this.#supplierId = dto.supplier_id;
  }

  get userSupplierId() {
    return this.#userSupplierId;
  }

  toModel() {
    return {
      userSupplierId: this.#userSupplierId,
      userId: this.#userId,
      supplierId: this.#supplierId,
      ...super.toModel()
    };
  }
}

class UserTableViewColumnDto extends StandardDto {
  #userViewId;
  #userId;
  #page;
  #fieldView;

  constructor(dto) {
    super(dto);
    this.#userViewId = dto.user_view_id;
    this.#userId = dto.user_id;
    this.#page = dto.page;
    this.#fieldView = dto.field_view;
  }

  get userViewId() {
    return this.#userViewId;
  }

  toModel() {
    return {
      userViewId: this.#userViewId,
      userId: this.#userId,
      page: this.#page,
      fieldView: this.#fieldView,
      ...super.toModel()
    };
  }
}

class UserTurunanDto extends StandardDto {
  #turunanId;
  #userId;
  #userTurunanId;

  constructor(dto) {
    super(dto);
    this.#turunanId = dto.turunan_id;
    this.#userId = dto.user_id;
    this.#userTurunanId = dto.user_turunan_id;
  }

  get turunanId() {
    return this.#turunanId;
  }

  toModel() {
    return {
      turunanId: this.#turunanId,
      userId: this.#userId,
      userTurunanId: this.#userTurunanId,
      ...super.toModel()
    };
  }
}

export {
  UserAksesCompanyDto,
  UserCustomerDto,
  UserDto,
  UserGroupDto,
  UserGroupAccessDto,
  UserGroupCustomerDto,
  UserItemDto,
  UserOtpDto,
  UserSalesmanDto,
  UserSupplierDto,
  UserTableViewColumnDto,
  UserTurunanDto
};

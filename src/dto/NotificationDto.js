import StandardDto from './StandardDto.js';

class NotificationDto extends StandardDto {
  #notificationId;
  #transactionId;
  #transactionCode;
  #transactionDate;
  #transactionType;
  #userId;
  #userGroupId;
  #pageId;
  #note;
  #notificationDate;
  #isread;
  #status;
  #statusUpdate;
  #modifiedTime;

  constructor(dto) {
    super(dto);
    this.#notificationId = dto.notification_id;
    this.#transactionId = dto.transaction_id;
    this.#transactionCode = dto.transaction_code;
    this.#transactionDate = dto.transaction_date;
    this.#transactionType = dto.transaction_type;
    this.#userId = dto.user_id;
    this.#userGroupId = dto.user_group_id;
    this.#pageId = dto.page_id;
    this.#note = dto.note;
    this.#notificationDate = dto.notification_date;
    this.#isread = dto.isread;
    this.#status = dto.status;
    this.#statusUpdate = dto.status_update;
    this.#modifiedTime = dto.modified_time;
  }
  get notificationId() {
    return this.#notificationId;
  }

  toModel() {
    return {
      notificationId: this.#notificationId,
      transactionId: this.#transactionId,
      transactionCode: this.#transactionCode,
      transactionDate: this.#transactionDate,
      transactionType: this.#transactionType,
      userId: this.#userId,
      userGroupId: this.#userGroupId,
      pageId: this.#pageId,
      note: this.#note,
      notificationDate: this.#notificationDate,
      isread: this.#isread,
      status: this.#status,
      statusUpdate: this.#statusUpdate,
      modifiedTime: this.#modifiedTime,
      ...super.toModel()
    };
  }
}

class NotificationDetailDto extends StandardDto {
  #notificationDtId;
  #notificationId;
  #userId;
  #userGroupId;
  #isread;
  #status;
  #statusUpdate;
  #modifiedTime;

  constructor(dto) {
    super(dto);
    this.#notificationDtId = dto.notification_dt_id;
    this.#notificationId = dto.notification_id;
    this.#userId = dto.user_id;
    this.#userGroupId = dto.user_group_id;
    this.#isread = dto.isread;
    this.#status = dto.status;
    this.#statusUpdate = dto.status_update;
    this.#modifiedTime = dto.modified_time;
  }
  get notificationDtId() {
    return this.#notificationDtId;
  }

  toModel() {
    return {
      notificationDtId: this.#notificationDtId,
      notificationId: this.#notificationId,
      userId: this.#userId,
      userGroupId: this.#userGroupId,
      isread: this.#isread,
      status: this.#status,
      statusUpdate: this.#statusUpdate,
      modifiedTime: this.#modifiedTime
    };
  }
}

export { NotificationDto, NotificationDetailDto };

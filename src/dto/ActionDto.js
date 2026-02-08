import StandardDto from './StandardDto.js';

class ActionDto extends StandardDto {
  #actionId;
  #actionName;
  #posisi;
  #modtime;

  constructor(dto) {
    super(dto);
    this.#actionId = dto.action_id;
    this.#actionName = dto.action_name;
    this.#posisi = dto.posisi;
    this.#modtime = dto.modtime;
  }
  get actionId() {
    return this.#actionId;
  }

  toModel() {
    return {
      actionId: this.#actionId,
      actionName: this.#actionName,
      posisi: this.#posisi,
      modtime: this.#modtime,
      ...super.toModel()
    };
  }
}

class ActionPageDto extends StandardDto {
  #actionPageId;
  #pageId;
  #actionId;

  constructor(dto) {
    super(dto);
    this.#actionPageId = dto.action_page_id;
    this.#pageId = dto.page_id;
    this.#actionId = dto.action_id;
  }

  get actionPageId() {
    return this.#actionPageId;
  }

  toModel() {
    return {
      actionPageId: this.#actionPageId,
      pageId: this.#pageId,
      actionId: this.#actionId,
      ...super.toModel()
    };
  }
}

export { ActionDto, ActionPageDto };

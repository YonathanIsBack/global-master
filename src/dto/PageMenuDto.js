import StandardDto from './StandardDto.js';

class PageMenuDto extends StandardDto {
  #pageId;
  #pagePath;
  #pageName;
  #pageUrl;
  #urutan;

  constructor(dto) {
    super(dto);
    this.#pageId = dto.page_id;
    this.#pagePath = dto.page_path;
    this.#pageName = dto.page_name;
    this.#pageUrl = dto.page_url;
    this.#urutan = dto.urutan;
  }

  get pageId() {
    return this.#pageId;
  }

  toModel() {
    return {
      pageId: this.#pageId,
      pagePath: this.#pagePath,
      pageName: this.#pageName,
      pageUrl: this.#pageUrl,
      urutan: this.#urutan,
      ...super.toModel()
    };
  }
}

class PageMenuTerbukaDto extends StandardDto {
  #pageId;
  #pagePath;
  #pageName;
  #pageUrl;
  #urutan;

  constructor(dto) {
    super(dto);
    this.#pageId = dto.page_id;
    this.#pagePath = dto.page_path;
    this.#pageName = dto.page_name;
    this.#pageUrl = dto.page_url;
    this.#urutan = dto.urutan;
  }

  get pageId() {
    return this.#pageId;
  }

  toModel() {
    return {
      pageId: this.#pageId,
      pagePath: this.#pagePath,
      pageName: this.#pageName,
      pageUrl: this.#pageUrl,
      urutan: this.#urutan,
      ...super.toModel()
    };
  }
}

export { PageMenuDto, PageMenuTerbukaDto };

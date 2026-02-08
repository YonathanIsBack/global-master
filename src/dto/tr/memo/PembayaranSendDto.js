import StandardDto from "../../StandardDto.js";

class PembayaranSendDto extends StandardDto {
  #memoPembayaranSendId;
  #memoPembayaranSendCode;
  #memoPembayaranSendDate;
  #shippingId;
  #pic;
  #status;
  #total;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#memoPembayaranSendId = dto.memo_pembayaran_send_id;
    this.#memoPembayaranSendCode = dto.memo_pembayaran_send_code;
    this.#memoPembayaranSendDate = dto.memo_pembayaran_send_date;
    this.#shippingId = dto.shipping_id;
    this.#pic = dto.pic;
    this.#status = dto.status;
    this.#total = dto.total;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get memoPembayaranSendId() {
    return this.#memoPembayaranSendId;
  }

  toModel() {
    return {
      memoPembayaranSendId: this.#memoPembayaranSendId,
      memoPembayaranSendCode: this.#memoPembayaranSendCode,
      memoPembayaranSendDate: this.#memoPembayaranSendDate,
      shippingId: this.#shippingId,
      pic: this.#pic,
      status: this.#status,
      total: this.#total,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

export default PembayaranSendDto;


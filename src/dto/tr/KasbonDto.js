import StandardDto from '../StandardDto.js';

class KasbonDto extends StandardDto {
  #trKasbonId;
  #trKasbonCode;
  #trKasbonDate;
  #namaKaryawan;
  #nik;
  #departementId;
  #tanggalMasukKerja;
  #totalPinjaman;
  #keperluanPinjaman;
  #totalPotongan;
  #totalPotonganLain;
  #confirmtimeF;
  #confirmbyF;

  constructor(request) {
    super(request);
    this.#trKasbonId = request.tr_kasbon_id;
    this.#trKasbonCode = request.tr_kasbon_code;
    this.#trKasbonDate = request.tr_kasbon_date;
    this.#namaKaryawan = request.nama_karyawan;
    this.#nik = request.nik;
    this.#departementId = request.departement_id;
    this.#tanggalMasukKerja = request.tanggal_masuk_kerja;
    this.#totalPinjaman = request.total_pinjaman;
    this.#keperluanPinjaman = request.keperluan_pinjaman;
    this.#totalPotongan = request.total_potongan;
    this.#totalPotonganLain = request.total_potongan_lain;
    this.#confirmtimeF = request.confirmtime_f;
    this.#confirmbyF = request.confirmby_f;
  }

  get trKasbonId() {
    return this.#trKasbonId;
  }

  toModel() {
    return {
      trKasbonId: this.#trKasbonId,
      trKasbonCode: this.#trKasbonCode,
      trKasbonDate: this.#trKasbonDate,
      namaKaryawan: this.#namaKaryawan,
      nik: this.#nik,
      departementId: this.#departementId,
      tanggalMasukKerja: this.#tanggalMasukKerja,
      totalPinjaman: this.#totalPinjaman,
      keperluanPinjaman: this.#keperluanPinjaman,
      totalPotongan: this.#totalPotongan,
      totalPotonganLain: this.#totalPotonganLain,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

export default KasbonDto;

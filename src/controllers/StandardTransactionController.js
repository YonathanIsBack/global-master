import * as cheerio from 'cheerio';
import { StatusCodes } from 'http-status-codes';
import fetch from 'node-fetch';
import Constant from '../constants/Constant.js';
import buildResponse from '../util/buildResponse.js';
import StandardController from './StandardController.js';

class StandardTransactionController extends StandardController {
  #companyCookie;
  constructor(service) {
    super(service);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
    this.getReport = this.getReport.bind(this);
  }

  async changeStatus(request, response, dto) {
    const { data, isUpdated, details, deletedTables } = await this.service.changeStatus(dto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const message = isUpdated ? Constant.UPDATED : Constant.CREATED;

    return response.status(statusCode).json(buildResponse(statusCode, message, { ...data, deletedTables, details }));
  }

  async changeStatusRequest(request, response, dto) {
    const { data, isUpdated, details } = await this.service.changeStatusRequest(dto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const message = isUpdated ? Constant.UPDATED : Constant.CREATED;

    return response.status(statusCode).json(buildResponse(statusCode, message, { ...data, details }));
  }

  async getReport(request, response) {
    // Ambil semua parameter dari url encoded
    // Siapkan parameter ini untuk dikirim ke company
    // Lakukan pengambilan report
    // Bungkus pengambilan report dengan handling login
    // Mapping data hasil pengambilan report ke json
    const { body } = request;

    await this.#loginCompany();

    const reportParams = new URLSearchParams();
    const keys = Object.keys(body);
    keys.forEach(key => {
      reportParams.set(key, body[key]);
    });

    return await fetch('http://192.168.1.100/pantjq/public/purchase/report/local/purchaseQuote/get_report_js', {
      method: 'POST',
      body: reportParams,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', Cookie: this.#companyCookie }
    })
      .then((response) => response.json())
      .then((data) => {
        const $ = cheerio.load(data.html);
        const table = $('#myTable');
        const thead = table.find('thead');
        const titles = [];
        thead
          .find('tr')
          .children()
          .each((_, element) => {
            titles.push($(element).text());
          });
        const tables = [];
        const tbodys = table.find('tbody');
        tbodys.each((_, tbody) => {
          console.log('tbody', $(tbody).html());
          $(tbody)
            .children()
            .each((_, tr) => {
              const rowdata = {};
              $(tr)
                .children()
                .each((index, td) => {
                  rowdata[titles[index]] = $(td).html();
                });
              tables.push(rowdata);
            });
        });

        return response.status(StatusCodes.OK).json({ titles, tables });
      }).catch((err) => {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR);
      });

    return response.status(StatusCodes.OK).json(body);
  }

  async #loginCompany() {
    const params = new URLSearchParams();
    params.set('txtUsername', 'SKY');
    params.set('txtPassword', 'Sky1234!');
    params.set('isModal', '1');

    const httpResponse = await fetch('http://192.168.1.100/pantjq/public/login/fvalidate', {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    const cookie = httpResponse.headers.raw()['set-cookie'];
    this.#companyCookie = cookie.join(' ');
  }
}

export default StandardTransactionController;

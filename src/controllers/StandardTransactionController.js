import * as cheerio from 'cheerio';
import { StatusCodes } from 'http-status-codes';
import fetch from 'node-fetch';
import Constant from '../constants/Constant.js';
import buildResponse from '../util/buildResponse.js';
import StandardController from './StandardController.js';
import LoggerUtilSingleton from '../util/LoggerUtils.js';
import LogEvent from '../constants/LogEvent.js';

class StandardTransactionController extends StandardController {
  #companyCookie;
  notGroupedSelection = 0;

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
    const { body } = request;

    await this.#loginCompany();
    const reportParams = this.#buildReportFormParam(body);
    console.log(`${Constant.COMPANY_BASE_URL}${request.originalUrl.replace('/', '')}`);

    return await fetch(`${Constant.COMPANY_BASE_URL}${request.originalUrl.replace('/', '')}`, {
      method: 'POST',
      body: reportParams,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', Cookie: this.#companyCookie }
    })
      .then((response) => response.json())
      .then((data) => {
        const $ = cheerio.load(data.html);

        if (this.#isReportGrouped(body.selGroupBy)) {
          return response.status(StatusCodes.OK).json(this.#handleGroupedReport($));
        }

        return response.status(StatusCodes.OK).json(this.#handleNonGroupedReport($));
      })
      .catch((err) => {
        LoggerUtilSingleton.error(LogEvent.GLOBAL_REPORT, err);
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR);
      });
  }

  #isReportGrouped(selGroupBy) {
    return selGroupBy != this.notGroupedSelection;
  }

  #handleGroupedReport($) {
    const table = $('#myTable');
    const titles = this.#getTitlesFromTableHeader($, table.find('thead'), true);

    const rowDatas = [];
    let temporaryObject = { groupName: '', rows: [] };
    const length = $(table).children().length;

    $(table)
      .children()
      .each((index, row) => {
        if (index + 1 == length) {
          rowDatas.push(temporaryObject);
          $(row)
            .children()
            .each((_, tr) => {
              const rowdata = {};
              $(tr)
                .children()
                .each((index, td) => {
                  rowdata[titles[index]] = $(td).text().trim();
                });
              rowDatas.push(rowdata);
            });

          return;
        }

        if ($(row).is('thead')) {
          if (index != 0) {
            rowDatas.push(temporaryObject);
            temporaryObject = { groupName: '', rows: [] };
          }

          temporaryObject.groupName = $(row).find('tr').first().text().trim();

          return;
        }

        $(row)
          .children()
          .each((_, tr) => {
            const rowdata = {};
            $(tr)
              .children()
              .each((index, td) => {
                rowdata[titles[index]] = $(td).text().trim();
              });
            temporaryObject.rows.push(rowdata);
          });
      });

    return { titles, tables: rowDatas };
  }

  #handleNonGroupedReport($) {
    const table = $('#myTable');
    const titles = this.#getTitlesFromTableHeader($, table.find('thead'), false);

    const tables = [];
    const tableBodies = table.find('tbody');
    tableBodies.each((_, tbody) => {
      $(tbody)
        .children()
        .each((_, tr) => {
          const rowdata = {};
          $(tr)
            .children()
            .each((index, td) => {
              rowdata[titles[index]] = $(td).text().trim();
            });
          tables.push(rowdata);
        });
    });

    return { titles, tables };
  }

  #getTitlesFromTableHeader($, tableHead, isGrouped) {
    const titles = [];
    tableHead
      .find(`tr:eq(${isGrouped ? 1 : 0})`)
      .children()
      .each((_, element) => {
        titles.push($(element).text());
      });

    return titles;
  }

  #buildReportFormParam(body) {
    const reportParams = new URLSearchParams();
    const keys = Object.keys(body);
    keys.forEach((key) => {
      reportParams.set(key, body[key]);
    });

    return reportParams;
  }

  async #loginCompany() {
    const params = new URLSearchParams();
    params.set('txtUsername', Constant.COMPANY_TXT_USERNAME);
    params.set('txtPassword', Constant.COMPANY_TXT_PASSWORD);
    params.set('isModal', '1');

    const httpResponse = await fetch(`${Constant.COMPANY_BASE_URL}login/fvalidate`, {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    const cookie = httpResponse.headers.raw()['set-cookie'];
    this.#companyCookie = cookie.join(' ');
  }
}

export default StandardTransactionController;

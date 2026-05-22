import { StatusCodes } from 'http-status-codes';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

class GlobalReportController {
  constructor() {
    this.fetchReport = this.fetchReport.bind(this);
    this.loginCookie = this.loginCookie.bind(this);
  }

  fetchReport(request, response) {
    const { body } = request;

    console.log(body);

    return response.status(StatusCodes.OK).json(body);
  }

  async loginCookie(request, response) {
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
    const joinedCookie = cookie.join(' ');

    const reportParams = new URLSearchParams();
    reportParams.set('startDate_submit', '2026-04-01');
    reportParams.set('endDate_submit', '2026-05-31');
    reportParams.set('selGroupBy', '3');
    reportParams.set('selSearch', '0');
    reportParams.set('txtSearch', '');
    reportParams.set('selType', '1');
    reportParams.set('length', '0');
    reportParams.set('page', '1');

    const requestReport = await fetch(
      'http://192.168.1.100/pantjq/public/purchase/report/local/purchaseQuote/get_report_js',
      {
        method: 'POST',
        body: reportParams,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Cookie: joinedCookie }
      }
    )
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
          $(tbody).children().each((_, tr) => {
            const rowdata = {};
            $(tr).children().each((index, td) => {
              rowdata[titles[index]] = $(td).html();
            });
            tables.push(rowdata);
          });
        });

        return response.status(StatusCodes.OK).json({ titles, tables });
      });

    return response.status(StatusCodes.OK).json();
  }
}

export default GlobalReportController;

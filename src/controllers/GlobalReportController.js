import { StatusCodes } from 'http-status-codes';
import fetch from 'node-fetch';

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
    const body = { txtUsername: 'SKY', txtPassword: ' Sky1234!' };
    const params = new URLSearchParams();
    params.set('txtUsername', "SKY");
    params.set('txtPassword', 'Sky1234!');

    const httpResponse = await fetch('http://192.168.1.100/pantjq/public/login/fvalidate', {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    console.log(httpResponse);
    console.log(await httpResponse.text());
    console.log(httpResponse.headers.raw()['set-cookie']);
    const cookie = httpResponse.headers.raw()['set-cookie'];
    const workingCookie =
      'pantjq_session=kjr65buc27fgkivdg8e2ife2gmk6voaq; Path=/; HttpOnly; Expires=Sat, 09 May 2026 12:26:07 GMT; link_before=http%3A%2F%2F192.168.1.100%2Fpantjq%2Fpublic%2Fpurchase%2Freport%2Flocal%2FpurchaseOrder; Path=/; HttpOnly;';
    const testCookie =
      'pantjq_session=lb2035n3auemlhe65lgqrh4e9g74vjc1; Path=/; HttpOnly; Expires=Sat, 09 May 2026 12:28:27 GMT; link_before=http%3A%2F%2F192.168.1.100%2Fpantjq%2Fpublic%2Fpurchase%2Freport%2Flocal%2FpurchaseOrder; Path=/; HttpOnly;';
    const joinedCookie = cookie.join(' ');
    console.log(joinedCookie);

    const bodyReport = {
      startDate_submit: '2026-04-01',
      endDate_submit: '2026-05-31',
      selGroupBy: '3',
      selSearch: '0',
      txtSearch: '',
      selType: '1',
      length: '0',
      page: '1'
    };

    const requestReport = await fetch(
      'http://192.168.1.100/pantjq/public/purchase/report/local/purchaseQuote/get_report_js',
      {
        method: 'POST',
        body: JSON.stringify(bodyReport),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Cookie: testCookie }
      }
    );

    // console.log(requestReport);
    // console.log(await requestReport.text());
    // console.log(requestReport.headers.raw()['set-cookie']);

    return response.status(StatusCodes.OK).json();
  }
}

export default GlobalReportController;

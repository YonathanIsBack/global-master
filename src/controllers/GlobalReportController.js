import { StatusCodes } from "http-status-codes";

class GlobalReportController {
  constructor() {
    this.fetchReport = this.fetchReport.bind(this);
  }

  fetchReport(request, response) {
    const { body } = request;

    console.log(body);

    return response.status(StatusCodes.OK).json(body);
  }

}

export default GlobalReportController;

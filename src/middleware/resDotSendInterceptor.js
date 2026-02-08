const resDotSendInterceptor = (res, send) => (content) => {
  res.contentBody = content;
  res.send = send;
  res.send(content);
};

export default resDotSendInterceptor;

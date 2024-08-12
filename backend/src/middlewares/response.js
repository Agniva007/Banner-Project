const httpStatus = require('http-status');
const logger = require('../../config/logger');

const responseHandler = (req, res, next) => {
  let send = res.send;
  res.send = (response) => {
    res.send = send;
    const statusCode = res.statusCode;
    const isSuccess = statusCode >= 200 && statusCode < 300;
    let responseBody = {
      status: isSuccess,
      message: response.message,
      data: response.data,
      err: ('error' in response) ? response.error : {}
    };

    return res.status(statusCode).send(responseBody);
  };
  next();
};

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  if (process.env.APP_STAGE === 'production' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[statusCode];
  }

  res.locals.errorMessage = err.message;
  if (statusCode === httpStatus.INTERNAL_SERVER_ERROR) {
    global.otherDatasource = null;
  }
  const response = {
    code: statusCode,
    status: false,
    message,
    ...(process.env.APP_STAGE === 'development' && { stack: err.stack }),
  };

  if (process.env.APP_STAGE === 'development') {
    logger.error('errorMessages: ',err);
  }

  return res.status(statusCode).send(response);
};

module.exports = {
  responseHandler,
  errorHandler
};

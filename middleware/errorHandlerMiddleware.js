const { CustomeAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomeAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  } else {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Something went wrong try again laters");
  }
  next();
};

module.exports = errorHandlerMiddleware;

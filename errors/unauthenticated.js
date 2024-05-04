const CustomeAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class UnauthorizedError extends CustomeAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthorizedError;

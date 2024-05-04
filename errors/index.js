const badRequestError = require("./bad-request");
const unauthorizedError = require("./unauthenticated");
const CustomeAPIError = require("./custom-error");

module.exports = {
  badRequestError,
  unauthorizedError,
  CustomeAPIError,
};

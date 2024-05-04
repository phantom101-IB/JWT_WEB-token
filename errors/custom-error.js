class CustomeAPIError extends Error {
  constructor(message, StatusCode) {
    super(message);
  }
}

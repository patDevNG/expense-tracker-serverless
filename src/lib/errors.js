class ValidationError extends Error {
    constructor(code, message) {
      super(message);
      this.code = code;
      this.name = "ValidationError";
      this.statusCode = 400;
      Error.captureStackTrace(this, NotFoundError);
    }
  }

  module.exports = {
 ValidationError
  }
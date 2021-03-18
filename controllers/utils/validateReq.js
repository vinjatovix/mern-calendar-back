const { validationResult } = require("express-validator");

function validateReq(req) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error();
    err.ok = false;
    err.code = 400;
    err.details = errors.mapped();
    throw err;
  }
}
exports.validateReq = validateReq;

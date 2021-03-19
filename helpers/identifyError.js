function identifyError(err) {
  if (err.code === 11000) {
    err.ok = false;
    err.mongoCode = err.code;
    err.code = 403;
    err.details = "Can't insert duplicate entry";
  }
  return err;
}
exports.identifyError = identifyError;

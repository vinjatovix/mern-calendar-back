function errorWare() {
  // eslint-disable-next-line no-unused-vars
  return function (err, req, res, next) {
    // logThis(err, req);
    err.ok = false;
    res.status(err.code).json(err);
  };
}

module.exports = { errorWare };

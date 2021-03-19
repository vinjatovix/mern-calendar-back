const { identifyError } = require("../helpers/identifyError");

function errorWare() {
  // eslint-disable-next-line no-unused-vars
  return function (err, req, res, next) {
    err = identifyError(err);
    // logThis(err, req);
    res.status(err.code).json(err);
  };
}

module.exports = { errorWare };


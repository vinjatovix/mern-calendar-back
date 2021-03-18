const { validateReq } = require("../utils/validateReq");

const logIn = (req, res, next) => {
  try {
    validateReq(req);
    const { email, password } = req.body;
    res.status(200).json({ ok: true, msg: "login", email, password });
  } catch (err) {
    next(err);
  }
};

module.exports = logIn;

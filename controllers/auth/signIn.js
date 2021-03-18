const { validateReq } = require('../utils/validateReq');

const signIn = (req, res, next) => {
  try {
    validateReq(req);
    const { username, email, password } = req.body;
    return res.status(201).json({ ok: true, msg: 'sign up', username, email, password });
  } catch (err) {
    next(err);
  }
};

module.exports = signIn;

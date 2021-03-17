const logIn = (req, res, next) => {
  try {
    res.status(200).json({ ok: true, msg: "login" });
  } catch (err) {
    next(err);
  }
};

module.exports = logIn;

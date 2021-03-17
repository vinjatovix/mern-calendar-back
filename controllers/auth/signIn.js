const signIn = (req, res, next) => {
  try {
    res.status(200).json({ ok: true, msg: "sign up" });
  } catch (err) {
    next(err);
  }
};

module.exports = signIn;

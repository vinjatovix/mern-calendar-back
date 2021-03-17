const renew = (req, res, next) => {
  try {
    res.status(200).json({ ok: true, msg: "refresh token" });
  } catch (err) {
    next(err);
  }
};
module.exports = renew;

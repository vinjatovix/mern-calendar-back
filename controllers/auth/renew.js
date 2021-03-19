const { generateJWT, validateReq } = require('../../helpers/helpers');

const renew = async (req, res, next) => {
  try {
    validateReq(req);
    const { uid, username, email } = req;

    const token = await generateJWT({ uid, username, email });

    res.status(200).json({ ok: true, msg: 'refresh token', uid, username, email, token });
  } catch (err) {
    next(err);
  }
};
module.exports = renew;

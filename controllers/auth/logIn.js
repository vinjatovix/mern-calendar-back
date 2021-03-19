const User = require('../../models/User');
const bcrypt = require('bcryptjs');

const { generateJWT } = require('../../helpers/jwt');
const { validateReq } = require('../../helpers/validateReq');

const logIn = async (req, res, next) => {
  try {
    validateReq(req);
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      const err = new Error();
      err.ok = false;
      err.code = 400;
      err.message = 'Invalid Credentials';
      throw err;
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      const err = new Error();
      err.ok = false;
      err.code = 400;
      err.message = 'Invalid Credentials';
      throw err;
    }
    const token = await generateJWT({ uid: user.id, username: user.username, email: user.email });
    res.status(200).json({ ok: true, msg: 'login', uid: user.id, username: user.username, email: user.email, token });
  } catch (err) {
    next(err);
  }
};

module.exports = logIn;

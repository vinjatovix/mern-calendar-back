const { validateReq } = require('../utils/validateReq');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const { generateJWT } = require('../../helpers/jwt');

const signIn = async (req, res, next) => {
  try {
    validateReq(req);
    const { username, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      const err = new Error();
      err.ok = false;
      err.code = 400;
      err.details = 'This mail has been already registered';
      throw err;
    }

    user = new User(req.body);

    const salt = bcrypt.genSaltSync(12);
    user.password = bcrypt.hashSync(password, salt);

    await user.save();
    const token = await generateJWT({ uid: user.id, username: user.username, email: user.email });
    return res
      .status(201)
      .json({ ok: true, msg: 'sign up', uid: user.id, username: user.username, email: user.email, token });
  } catch (err) {
    next(err);
  }
};

module.exports = signIn;

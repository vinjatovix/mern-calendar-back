const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      const err = new Error();
      throw err;
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.uid = payload.uid;
    req.username = payload.username;
    req.email = payload.email;
    next();
  } catch (err) {
    err.ok = false;
    err.code = 401;
    err.details = 'Invalid token';
    next(err);
  }
};

module.exports = { validateJWT };

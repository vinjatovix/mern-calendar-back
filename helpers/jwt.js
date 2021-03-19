const jwt = require('jsonwebtoken');

const generateJWT = ({ uid, username, email }) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, username, email };
    // const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          reject('Token Unavaible');
        }
        resolve(token);
      }
    );
  });
};
module.exports = { generateJWT };

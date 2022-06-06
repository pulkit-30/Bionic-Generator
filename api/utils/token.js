var jwt = require('jsonwebtoken');

/**
 * @param {Object} data
 */
const generateToken = async (data) => {
  var token = jwt.sign(data, process.env.TOKEN_KEY);
  return token;
};

/**
 *
 * @param {String} token
 * @returns
 */
const verifyToken = (token) => {
  var decoded = jwt.verify(token, process.env.TOKEN_KEY);
  return decoded;
};

module.exports = { generateToken, verifyToken };

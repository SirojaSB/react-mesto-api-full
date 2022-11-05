const jwt = require('jsonwebtoken');
const { getJWTSecretKey } = require('../utils/utills');
const UnauthorizedError = require('../utils/errors/unauthorizedError');

module.exports.verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Неправильные почта или пароль'));
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    const jwtKey = getJWTSecretKey();
    payload = jwt.verify(token, jwtKey);
  } catch (err) {
    return next(new UnauthorizedError('Неправильные почта или пароль'));
  }

  req.user = payload;

  return next();
};

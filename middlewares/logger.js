
function textLoggerMiddleware(message) {
  return function(req, res, next) {
    console.log(message);
    next();
  };
}

module.exports = textLoggerMiddleware;

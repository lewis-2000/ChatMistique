
function textLoggerMiddleware(message) {
    console.log( Date.now() + ': ' + message);
}

module.exports = textLoggerMiddleware;

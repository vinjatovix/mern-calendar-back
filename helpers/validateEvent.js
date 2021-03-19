function validateEvent(event, uid) {
  if (!event) {
    const err = new Error();
    err.code = 404;
    err.message = 'not found';
    throw err;
  }
  if (event.user.toString() !== uid) {
    const err = new Error();
    err.code = 401;
    err.message = 'Not authorized';
    throw err;
  }
}
exports.validateEvent = { validateEvent };

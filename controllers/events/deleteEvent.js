const deleteEvent = async (req, res, next) => {
  try {
    res.status(200).json({ ok: true, msg: 'deleteEvent' });
  } catch (err) {
    err.code = isNaN(err.code) ? 500 : err.code;

    next(err);
  }
};

module.exports = { deleteEvent };

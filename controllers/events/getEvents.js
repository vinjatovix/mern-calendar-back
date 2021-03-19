const Event = require('../../models/Event');

const getEvents = async (req, res, next) => {
  try {
    const events = await Event.find().populate('user', 'name');
    res.status(200).json({ ok: true, events });
  } catch (err) {
    err.code = isNaN(err.code) ? 500 : err.code;

    next(err);
  }
};

module.exports = { getEvents };

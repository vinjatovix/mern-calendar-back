const { validateReq } = require('../../helpers/helpers');
const Event = require('../../models/Event');

const addEvent = async (req, res, next) => {
  try {
    validateReq(req);

    const event = new Event(req.body);
    event.user = req.uid;
    const createdEvent = await event.save();

    res.status(201).json({ ok: true, event: createdEvent });
  } catch (err) {
    err.code = isNaN(err.code) ? 500 : err.code;
    next(err);
  }
};

module.exports = { addEvent };

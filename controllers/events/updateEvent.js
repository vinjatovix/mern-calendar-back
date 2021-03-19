const { validateReq } = require('../../helpers/validateReq');
const Event = require('../../models/Event');

const updateEvent = async (req, res, next) => {
  try {
    validateReq(req);
    const eventId = req.params.id;
    const uid = req.uid;
    const event = await Event.findById(eventId);

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
    const updateData = {
      ...req.body,
      user: uid,
    };
    const updatedEvent = await Event.findByIdAndUpdate(eventId, updateData, { new: true });

    res.status(200).json({ ok: true, updatedEvent });
  } catch (err) {
    err.code = isNaN(err.code) ? 500 : err.code;

    next(err);
  }
};

module.exports = { updateEvent };

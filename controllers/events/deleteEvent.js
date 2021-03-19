const Event = require('../../models/Event');
const { validateEvent, validateReq } = require('../../helpers/helpers');

const deleteEvent = async (req, res, next) => {
  try {
    validateReq(req);
    const eventId = req.params.id;
    const uid = req.uid;
    const event = await Event.findById(eventId);
    validateEvent(event, uid);

    await Event.findByIdAndDelete(eventId);

    res.status(200).json({ ok: true, details: `${uid} deleted` });
  } catch (err) {
    console.log(err);
    err.code = isNaN(err.code) ? 500 : err.code;

    next(err);
  }
};

module.exports = { deleteEvent };

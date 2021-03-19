const { Router } = require('express');
const { check } = require('express-validator');
const { validateJWT } = require('../middlewares/validateJWT');
const { addEvent, deleteEvent, getEvents, updateEvent } = require('../controllers/events/events-controller');
const { isDate, validateReq } = require('../helpers/helpers');

const router = Router();
router.use(validateJWT);

router.get('/', getEvents);
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
  ],
  addEvent
);
router.put(
  '/:id',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
  ],
  updateEvent
);
router.delete('/:id', deleteEvent);

module.exports = router;

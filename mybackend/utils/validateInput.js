const { check, validationResult } = require('express-validator');

const validateTaskInput = [
  check('title', 'Title is required').not().isEmpty(),
  check('description', 'Description is required').not().isEmpty(),
  check('deadline', 'Deadline must be a valid date').isISO8601(),
  check('status', 'Status must be valid').isIn(['Pending', 'In Progress', 'Completed']),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateTaskInput, validate };

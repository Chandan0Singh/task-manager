const { validateTaskInput, validate } = require('../utils/validateInput');

router.route('/').post(protect, validateTaskInput, validate, createTask);

const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

// Protected routes: Only accessible for authenticated users
router.route('/').get(protect, getTasks).post(protect, createTask);
router.route('/:id').get(protect, getTaskById).put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;

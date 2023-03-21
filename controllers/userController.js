const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET /users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// POST /users
router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

module.exports = router;

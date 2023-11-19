const express = require('express');
const router = express.Router();
const textLogger = require('../middlewares/logger');

//Default Route
router.get('/', (req, res) => {
  textLogger("Chat View")
  res.render('home');
});

module.exports = router;
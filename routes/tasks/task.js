const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/tasks/allTask', (req, res, next) => {
  res.render('tasks/allTask');
});

module.exports = router;

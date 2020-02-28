const express = require('express');
const router  = express.Router();


router.get('/tasks/task', (req, res, next) => {
  res.send('hola');
});

module.exports = router;

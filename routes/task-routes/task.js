const express = require('express');
const router  = express.Router();
const taskModel = require('../../models/task')


router.get('/', (req, res, next) => {

  taskModel.find()
        .then(allTaskFromDB => {
          res.render('task/alltask', { tasks: allTaskFromDB });
        })
        .catch(err => next(err))
 
});

router.get('/new-task', (req, res, next) => {
  res.render('task/ctask');
});

module.exports = router;

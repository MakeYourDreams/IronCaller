const express = require('express');
const router  = express.Router();
const taskModel = require('../../models/task')

//all task dashboard
router.get('/', (req, res, next) => {

  taskModel.find()
        .then(allTaskFromDB => {
          res.render('task/alltask', { tasks: allTaskFromDB });
        })
        .catch(err => next(err))
 
});

//view to add new task
router.get('/new-task', (req, res, next) => {
  res.render('task/ctask');
});

router.post('/create', (req, res, next) => {
  const reminderInfo = req.body;
  reminderInfo.status = false;
  taskModel.create(reminderInfo)
  .then(newReminder => {

    console.log(newReminder)

    res.redirect('back')

  })
  .catch(err => next
    (err));

});

module.exports = router;

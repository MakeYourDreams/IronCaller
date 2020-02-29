const express = require('express');
const router  = express.Router();
const taskModel = require('../../models/task')
const user = require("../../models/User");

//all task dashboard
router.get('/', (req, res, next) => {

  //see if user is login
  if (!req.session.user) {
    res.redirect("/auth/login");
  }

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

//view to edit task
router.get('/edit-task/:taskId', (req, res, next) => {
  
  res.render('task/edit-task');
});


//create new reminder
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

//update reminder


router.get('/update/:taskId', (req, res, next) => {
  tasks.findByIdAndUpdate(req.params.taskId)

      .then(updatedTasks => {
          next();
      })
      .catch(err => next(err));
});

module.exports = router;

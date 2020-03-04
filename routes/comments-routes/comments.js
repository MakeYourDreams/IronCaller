const express = require('express');
const router  = express.Router();
const commentsModel = require('../../models/comments')


//all commetns dashboard
// router.get('/users/', (req, res, next) => {

// commentsModel.find({ username: req.body.username })
//         .then(allTaskFromDB => {
//           res.render('comments/alltask', { tasks: allTaskFromDB });
//         })
//         .catch(err => next(err))

// });



//create new reminder
router.post('users/post-comment', (req, res, next) => {
  const commentInfo = req.body;
  commentInfo.status = false;
  commentsModel.create(reminderInfo)
  .then(newReminder => {

    console.log(newReminder)

    res.redirect('/tasks')

  })
  .catch(err => next
    (err));

});

//update reminder


router.get('/edit-task/:taskId', (req, res, next) => {
  taskModel.findOne({ _id : req.params.taskId })
      .then(updatedTasks => {
        
        res.render("task/edit-task",  updatedTasks );
      })
      .catch(err => next(err));
});


router.post('/edit-task/:taskId', (req, res, next) => {

    let {phone, date, message, subjet, time} = req.body;
    taskModel.findByIdAndUpdate(
    req.params.taskId,
    { phone, date, message, subjet, time },
    { new: true }
   
    
    )
    .then(res.redirect('/tasks'))
    
    
    .catch(err => next(err));

})



//delete reminder 

router.get('/delete/:taskId', (req, res, next) => {
  taskModel.remove({ _id : req.params.taskId })
      .then(res.redirect('/tasks'))



      .catch(err => next(err));
});






module.exports = router;
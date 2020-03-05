const express = require('express');
const router  = express.Router();
const user = require('../../models/User')
const comments = require('../../models/comments')

/* GET home page */
router.get('/edit', (req, res, next) => {
  user.find()
  .then(allUserFromDB => {
    res.render('./users/edit',{ actualUser: allUserFromDB });
  })
  
  .catch(err => next(err))

  
});

router.get('/delete/:userId', (req, res, next) => {
  user.remove({ _id : req.params.userId })
      .then(res.redirect('/tasks'))


      .catch(err => next(err));
});

// all users routes

router.get('/', (req, res, next) => {

  user.find()
  .then(allUserFromDB => {
    res.render('./contacts/allContacts',{ allUsers: allUserFromDB });
  })

      .catch(err => next(err));
});


router.get('/profile/:id', (req, res, next) => {

  const userID = { _id:req.params.id}
  user.findOne(userID)
    .then(UserFromDB => {
      res.render('./contacts/contact',{ oneUser: UserFromDB })
  
  }) //final busqueda de usuario


      .catch(err => next(err));
});







module.exports = router;

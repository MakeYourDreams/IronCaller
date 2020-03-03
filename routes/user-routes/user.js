const express = require('express');
const router  = express.Router();
const user = require('../../models/User')

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

module.exports = router;

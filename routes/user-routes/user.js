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

module.exports = router;

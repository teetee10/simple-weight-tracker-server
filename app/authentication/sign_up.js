import express from 'express'

var router = express.Router();

router.get('/signUp', function (req, res, next) {
  res.json();
});

function signUp(location) {
  var currentSeconds = new Date().getSeconds();
  return {}
}

module.exports = router;
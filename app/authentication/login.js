import express from 'express'

var router = express.Router()

router.get('/login', function (req, res, next) {
  res.json()
})

function login() {
  var currentSeconds = new Date().getSeconds()
  return {}
}

module.exports = router

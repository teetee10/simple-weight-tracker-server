const express = require('express')
var router = express.Router()

router.post('/signUp', (req, res, next) => {
 const { name, email, password } = req.body
  const newUser = {
    [email]: {
      name,
      password, //TODO: hash password
    },
  }

  try {
    await writeToStore(newUser)
  } catch {
    const error = new Error('Error! Something went wrong.')
    return next(error)
  }
  let token
  try {
    token = generateAccessToken(email)
  } catch (err) {
    const error = new Error('Error! Something went wrong.')
    return next(error)
  }
  res.status(200).json({
    success: true,
    data: { name, email, token },
  })
})

module.exports = router

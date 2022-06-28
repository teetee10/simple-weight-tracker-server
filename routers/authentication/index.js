const express = require('express')
const { generateAccessToken, writeToStore, readStore } = require('../../utils')
var router = express.Router()

router.post('/login', async (req, res, next) => {
    let { email, password } = req.body
    let existingUser
    let token

  try {
    existingUser = await readStore(email)

    if (!existingUser || existingUser.password != password) {
      const error = Error('Wrong password please check at once')
      return next(error)
    }

    //Creating jwt token
    token = generateAccessToken(email)
  } catch (err) {
    const error = new Error('Error! Something went wrong.')
    return next(error)
  }

  res.status(200).json({
    success: true,
    data: {
      email,
      token,
    },
  })
})

router.post('/signup', async (req, res, next) => {
  let token
  const { name, email, password } = req.body
  const newUser = {
    [email]: {
      name,
      password, //TODO: hash password
    },
  }

  try {
    await writeToStore(newUser)
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

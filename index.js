require('dotenv').config()

const express = require('express')
const login = require('./routers/authentication/login')
const signup = require('./routers/authentication/sign_up')

const app = express()
const PORT = 3000

app.use('/', (req, res, next) => {
  return res.send('Hello World!')
})

app.use('/login', login)
app.use('/signup', signup)

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT,
    )
  else console.log("Error occurred, server can't start", error)
})

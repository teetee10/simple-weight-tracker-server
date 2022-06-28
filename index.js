require('dotenv').config()

const express = require('express')
const rootRouter = require('./routers')

const app = express()
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', rootRouter)

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT,
    )
  else console.log("Error occurred, server can't start", error)
})

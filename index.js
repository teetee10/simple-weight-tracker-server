import 'dotenv/config'
import express from 'express'

const app = express()
const PORT = 3000

app.use('/hello', )

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT,
    )
  else console.log("Error occurred, server can't start", error)
})

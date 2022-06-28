const express = require('express')
const { readStoreByUsername, writeToStore, verifyAccessToken } = require('../../utils')
var router = express.Router()

router.post('weight/:weight', verifyAccessToken, async (req, res, next) => {
  try {
    const { weight } = req.body
    const hasWritten = await writeToStore(weight)
    if (!hasWritten)
      return res.status(401).json({
        success: false,
        message: 'Unable to store weight',
      })
    res.json()
  } catch (error) {
    next(error)
  }
})

router.get('/weight/history/:username', verifyAccessToken, async (req, res, next) => {
  try {
    const data = await readStoreByUsername(username)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

module.exports = router

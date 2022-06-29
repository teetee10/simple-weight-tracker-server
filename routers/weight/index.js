const express = require('express')
const {
  readStoreByUsername,
  writeToStore,
} = require('../../services')
const {
  verifyAccessToken,
} = require('../../utils')
var router = express.Router()

router.post('/add', verifyAccessToken, (req, res, next) => {
  const initWeight = []
  try {
    const { weight, time } = req.body
    const username = req.user
    const userData = readStoreByUsername(username)

    const weightMeta = { weight, time }
    // prepare payload
    const mutatedWeight = [...(userData.weight || initWeight), weightMeta]

    const payload = {
      [username]: { ...userData, weight: mutatedWeight },
    }
    //save to storage/db
    writeToStore(payload)
    res.json({
      success: true,
      data: weightMeta
    })
  } catch (e) {
    const error = Error('unable to save weight')
    return res.status(401).json({ success: false, message: error.message })
  }
})

router.get('/history', verifyAccessToken, (req, res, next) => {
  try {
    const userData = readStoreByUsername(req.user)
    const weightHistory = userData.weight
    res.json({
      success: true,
      data: weightHistory
    })
  } catch (e) {
    const error = Error('unable to fetch weight')
    return res.status(401).json({ success: false, message: error.message })
  }
})

module.exports = router

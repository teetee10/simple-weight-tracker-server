const express = require('express')
const readStoreByUsername = require('../../utils/read_store_by_username')
var router = express.Router()

router.get('/:username', verifyAccessToken, async (req, res, next) => {
  res.json(await readStoreByUsername(username))
})

module.exports = router

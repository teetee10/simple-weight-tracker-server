const express = require('express')
var router = express.Router();

router.post('/:weight', verifyAccessToken, function (req, res, next) {
   const { weight } = req.body
    const hasWritten = await writeStore(weight)
  if (!hasWritten) return res.status(401).json({
    success: false
  })
  res.json();
});


module.exports = router;
import express from 'express'

var router = express.Router();

router.get('/:weight', function (req, res, next) {
  res.json(saveUserWeight(req.params.weight));
});

function saveUserWeight(userWeight, callback) {
  try {
    const data = await writeStore(userWeight)
  } catch (e) {
    
  }
}

module.exports = router;
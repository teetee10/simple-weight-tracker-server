import express from 'express'

var router = express.Router();

router.get('/:id', function (req, res, next) {
  res.json(getUserWeight(req.params.location));
});

function getUserWeight(person, callback) {
  try {
    await fs.writeFile(process.env.DB_PATH, JSON.stringify(person), callback);
  } catch (e) {
    
  }
}



module.exports = router;
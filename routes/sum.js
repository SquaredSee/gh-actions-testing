var express = require('express');
var router = express.Router();

const sum = (a, b) => {
  return a + b;
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

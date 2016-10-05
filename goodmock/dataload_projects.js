var express = require('express');
var router = express.Router();

router.get('/:project_id/csv/datasets', function (req, res) {
  res.json({"datasets":{"items":[]}});
})

module.exports = router;

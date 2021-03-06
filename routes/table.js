const express = require('express');
const router = express.Router();
const table = require('../services/table');

router.get('/', async function(req, res, next) {
  try {
    res.json(await table.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;
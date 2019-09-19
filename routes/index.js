const express = require('express');
const router = express.Router();
const operaciones = require('../services/operaciones-service');

/* GET home page. */
router.post('/', (req, res) => {

  const payload = req.body;
  if (Array.isArray(payload)) {

    let valuesNotNumber = false;

    payload.forEach(
        value => typeof value !== 'number'
            ? valuesNotNumber = true
            : valuesNotNumber = false
    );

    if (valuesNotNumber) {
      res.status(422).json({
        response: {
          data: '',
          errors: ['invalid_data_format']
        }
      });
    }

    const data = operaciones(payload);

    return res.json({
      response: {
        data
      }
    })
  }

  res.status(422).json({
    response: {
      data: '',
      errors: ['invalid_data_format']
    }
  });
});

module.exports = router;

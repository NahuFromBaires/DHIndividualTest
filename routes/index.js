const express = require('express');
const router = express.Router();
const principalController = require('../controller/principalController');


router.get('/', principalController.traeNotas);

router.get('/detail', principalController.Edita);




module.exports = router;

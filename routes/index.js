const express = require('express');
const router = express.Router();
const principalController = require('../controller/principalController');


router.get('/', principalController.traeNotas);
router.get('/detail', principalController.traeNotas);
router.get('/detail/:id', principalController.Edita);

router.post('/create', principalController.CreaNota);

module.exports = router;

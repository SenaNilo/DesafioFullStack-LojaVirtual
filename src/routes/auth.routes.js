const express = require('express'); 
const router = express.Router(); 
const AuthController = require('../controller/AuthController'); 

router.get('/', AuthController.getUsers)
router.get('/init', AuthController.initDatabase);
router.post('/login', AuthController.login); 
 
module.exports = router;
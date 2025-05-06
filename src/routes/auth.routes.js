const express = require('express'); 
const router = express.Router(); 
const AuthController = require('../controller/AuthController'); 

router.get('/', AuthController.getUsers)
// Init no seed
// router.get('/init', AuthController.initDatabase);
router.post('/login', AuthController.login); 
router.delete('/delete/:id', AuthController.deleteUser)
 
module.exports = router;
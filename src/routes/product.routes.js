const express = require('express'); 
const router = express.Router(); 
const ProductController = require('../controller/ProductController'); 
const verificarToken = require('../middlewares/auth.middleware'); 
 
// router.get('/', () => { return "ola mundo" }); 
router.get('/', ProductController.list); 
router.post('/',  verificarToken, ProductController.create); 
 
module.exports = router; 
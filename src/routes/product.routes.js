const express = require('express'); 
const router = express.Router(); 
const ProductController = require('../controller/ProductController'); 
const verificarToken = require('../middlewares/auth.middleware'); 
 
router.get('/', ProductController.list); 
router.get('/init', ProductController.initDatabase)

router.get('/delete/:id', ProductController.delete)

router.post('/',  verificarToken, ProductController.create); 
 
module.exports = router; 
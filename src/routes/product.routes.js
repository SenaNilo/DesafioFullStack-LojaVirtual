const express = require('express'); 
const router = express.Router(); 
const ProductController = require('../controller/ProductController'); 
const verificarToken = require('../middlewares/auth.middleware'); 
 
router.get('/', ProductController.list); 
router.post('/init', ProductController.initDatabase)
router.delete('/delete/:id', ProductController.delete)


router.post('/',  verificarToken, ProductController.create); 
 
module.exports = router; 
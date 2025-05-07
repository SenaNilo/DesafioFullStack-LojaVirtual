const express = require('express'); 
const router = express.Router(); 
const ProductController = require('../controller/ProductController'); 
const verificarToken = require('../middlewares/auth.middleware'); 
 
router.get('/', ProductController.list); 

router.delete('/delete/:id', ProductController.deleteProduct)

router.post('/', ProductController.create); 
router.put('/update', ProductController.updateProduct); 
 
module.exports = router; 
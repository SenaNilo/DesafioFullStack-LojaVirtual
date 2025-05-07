const express = require('express'); 
const router = express.Router(); 
const ProductController = require('../controller/ProductController'); 
const verificarToken = require('../middlewares/auth.middleware'); 
 
router.get('/', ProductController.list); 

// Delete como user mudar!!
router.delete('/delete/:id', ProductController.deleteProduct)

router.post('/', ProductController.create); 
 
module.exports = router; 
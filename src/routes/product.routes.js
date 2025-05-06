const express = require('express'); 
const router = express.Router(); 
const ProductController = require('../controller/ProductController'); 
const verificarToken = require('../middlewares/auth.middleware'); 
 
router.get('/', ProductController.list); 

// Init na Seed!
// router.post('/init', ProductController.initDatabase)


// Delete como user mudar!!
router.delete('/delete/:id', ProductController.deleteProduct)


router.post('/',  verificarToken, ProductController.create); 
 
module.exports = router; 
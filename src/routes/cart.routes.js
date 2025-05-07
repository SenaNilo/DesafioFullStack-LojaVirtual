const express = require('express'); 
const router = express.Router(); 
const CartController = require('../controller/CartController'); 

router.post('/', CartController.viewCart)
router.post('/add', CartController.addProduct)
router.delete('/delete/:productId/:userId', CartController.deleteProduct)

module.exports = router;
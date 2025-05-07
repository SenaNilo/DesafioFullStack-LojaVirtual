const express = require('express'); 
const router = express.Router(); 
const CartController = require('../controller/CartController'); 

router.post('/', CartController.viewCart)
router.post('/add', CartController.addProduct)
router.delete('/delete/:productId/:userId', CartController.deleteProduct)
router.put('/update/:productId/:userId', CartController.updateQuantity)

module.exports = router;
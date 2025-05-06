const express = require('express'); 
const router = express.Router(); 
const CartController = require('../controller/CartController'); 

router.post('/add', CartController.addProduct)
router.post('/view', CartController.viewAllProducts)
router.delete('/delete/id:', CartController.deleteProduct)
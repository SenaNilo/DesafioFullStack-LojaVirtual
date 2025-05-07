const express = require('express'); 
const router = express.Router(); 
const AuthController = require('../controller/AuthController'); 

const verificarToken = require('../middlewares/auth.middleware')

router.get('/', AuthController.getUsers)
// Init no seed
// router.get('/init', AuthController.initDatabase);
router.post('/login', AuthController.login); 
router.delete('/delete/:id', AuthController.deleteUser)

// Middleware
router.get('/token', verificarToken, async(req, res) => {
    const userId = req.user.userId

    res.json(userId)
})
 
module.exports = router;
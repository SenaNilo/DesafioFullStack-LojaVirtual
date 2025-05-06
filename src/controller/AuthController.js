const prisma = require('../models/PrismaService'); 
const jwt = require('jsonwebtoken'); 
const SECRET_KEY = process.env. ACCESS_KEY; 
 
class AuthController { 

  static async login(req, res) { 
    const { username, password } = req.body; 
    
    try{
      //fazer um bcrypt
      const user = await prisma.user.findUnique({ 
        where: { username } 
      }); 

      if (!user || !(await bcrypt.compare(password, user.password))) { 
        return res.status(401).json({ message: 'Credenciais inválidas' }); 
      } 

      const token = jwt.sign( 
        { userId: user.id, username: user.username }, 
        SECRET_KEY, 
        { expiresIn: '1h' } 
      ); 

      res.json({ token }); 

    }catch(error){
      res.status(500).json({ error: "Erro ao fazer login" });
    }
    
    return
  } 

  static async getUsers(req, res){
    const users = await prisma.user.findMany(); 
    return res.json(users);
  }

  // static async cadastro(req, res){

  // }
} 
 
module.exports = AuthController; 
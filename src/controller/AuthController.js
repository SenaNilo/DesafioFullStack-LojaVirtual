const prisma = require('../models/PrismaService'); 
const jwt = require('jsonwebtoken'); 
const SECRET_KEY = process.env.ACCESS_KEY; 
const bcrypt = require('bcrypt');

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
      res.status(500).json({ error: "Erro ao fazer login"});
    }
    
  } 

  static async getUsers(req, res){
    const users = await prisma.user.findMany(); 
    return res.json(users);
  }

  static async createUser(req, res){
    const { username, password } = req.body;

    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        password: hash
      }
    })

    res.json(newUser)
  }

  // Para CRUD em User
  // static async updateUser(req, res){
  //   const { name, price, description } = req.body; 
  //   const updatedUser = await prisma.user.update({
  //     where: {
  //       id
  //     },
  //     data: {
  //       name,
  //       price: parseFloat(price), 
  //       description
  //     }
  //   })

  //   res.json(updatedUser)
  // }

  static async deleteUser(req, res){
    const { id } = req.params
    const deleteUser = await prisma.user.delete({
      where: {
        id: parseInt(id)
      }
    })

    res.json(deleteUser)
  }
} 
 
module.exports = AuthController; 
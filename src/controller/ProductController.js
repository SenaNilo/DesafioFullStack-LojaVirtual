const prisma = require('../models/PrismaService'); 
 
class ProductController { 
  static async list(req, res) { 
    const products = await prisma.product.findMany(); 
    return res.json(products);
  } 
 
  static async create(req, res) { 
    const { name, price, description } = req.body; 
 
    const product = await prisma.product.create({ 
      data: { name, price: parseFloat(price), description } 
    }); 
 
    res.json(product); 
  }
  
  static async updateProduct(req, res){
    const { id, name, price, description } = req.body; 

    const updatedproduct = await prisma.product.update({
      where: {
        id
      },
      data: {
        name,
        price: parseFloat(price), 
        description
      }
    })

    res.json(updatedproduct)
  }

  static async deleteProduct(req, res){
    const { id } = req.params
    const deleteProduct = await prisma.product.delete({
      where: {
        id: parseInt(id)
      }
    })

    res.json(deleteProduct)
  }

} 

module.exports = ProductController;
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
  
  static async updateUser(req, res){
    const { name, price, description } = req.body; 
    const updatedUser = await prisma.user.update({
      where: {
        id
      },
      data: {
        name,
        price: parseFloat(price), 
        description
      }
    })

    res.json(updatedUser)
  }

  static async deletedUser(req, res){
    const { id } = req.params
    const deletedUser = await prisma.user.delete({
      where: {
        id
      }
    })

    res.json(deletedUser)
  }

  static async initDatabase(req, res){
    const ourProducts = await prisma.product.createMany({
      data: [
        {
          name: "Pizza Margherita",
          price: 39.90,
          description: "Clássica pizza italiana com molho de tomate, muçarela e manjericão fresco."
        },
        {
          name: "Hambúrguer Artesanal",
          price: 28.50,
          description: "Pão brioche, hambúrguer 180g, queijo cheddar, cebola caramelizada e maionese da casa."
        },
        {
          name: "Sushi Combo",
          price: 59.99,
          description: "20 peças de sushi sortidas com sashimi, nigiri e uramaki."
        },
        {
          name: "Lasanha à Bolonhesa",
          price: 34.00,
          description: "Massa fresca com camadas de molho bolonhesa, queijo e molho branco gratinado."
        },
        {
          name: "Açaí com Frutas",
          price: 18.00,
          description: "Tigela de açaí 400ml com banana, morango, granola e leite condensado."
        },
        {
          name: "Tapioca de Frango com Catupiry",
          price: 14.00,
          description: "Tapioca crocante recheada com frango desfiado e catupiry cremoso."
        },
        {
          name: "Espaguete ao Alho e Óleo",
          price: 22.90,
          description: "Massa al dente com alho dourado, azeite extra virgem e pimenta calabresa."
        },
        {
          name: "Churrasco Misto",
          price: 69.90,
          description: "Picanha, linguiça, frango e acompanhamentos típicos como farofa e vinagrete."
        },
        {
          name: "Bolo de Chocolate",
          price: 12.00,
          description: "Fatia generosa de bolo de chocolate com cobertura cremosa e recheio de brigadeiro."
        },
        {
          name: "Salada Caesar",
          price: 25.00,
          description: "Alface romana, frango grelhado, croutons crocantes e molho Caesar caseiro."
        }
      ]
    })

    res.json(ourProducts)
  }

} 

module.exports = ProductController;
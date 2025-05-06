const prisma = require('../models/PrismaService'); 

class CartController {

    static async addProduct(req,res) {
        const { username, productId, quantity } = req.body;

        try{
            // Verificar o usuario
            const user = await prisma.user.findFirst({
                where: {
                    username
                }
            })

            if (!user){
                return res.status(404).json({error: 'Usuário não encontrado' })
            }

            // Verifica se o produto existe
            const product = await prisma.product.findUnique({
                where: { id: productId }
            });

            if (!product) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }

            // Verifica se o item já existe no carrinho
            const existingItem = await prisma.cartItem.findFirst({
                where: {
                    userId: user.id,
                    productId
                }
            });

            if (existingItem) {
                // attualiza a quantidade
                const updatedItem = await prisma.cartItem.update({
                    where: { 
                        id: existingItem.id 
                    },
                    data: { 
                        quantity: existingItem + quantity
                    }
                });
    
                res.json({ message: 'Quantidade atualizada no carrinho', item: updatedItem });
            }

            // Colocar um novo item no carringo (cartItem)
            const newItem = await prisma.cartItem.create({
                data: {
                    userId: user.id,
                    productId,
                    quantity
                }
            });

            res.json(newItem)

        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao adicionar produto ao carrinho' });
        }

        return

    }

    static async viewCart(req, res) {
        const { username } = req.body;

        const user = await prisma.user.findFirst({
            where: {
                username
            }
        })
        if (!user){
            return res.status(404).json({error: 'Usuário não encontrado' })
        }

        const products = await prisma.cartItem.findMany({
            where: {
                userId: user.id
            },
            select: {
                id: true,
                quantity: true,
                productId: true,
            }
        })

        res.json(products)
    }   

    static async deleteProduct(req, res){
        // Deletar o produto do carrinho
        const { id } = req.params

        const deleteProduct = await prisma.cartItem.delete({
          where: {
            productId: parseInt(id)
          }
        })
    
        res.json(deleteProduct)
      }
}

module.exports = CartController;
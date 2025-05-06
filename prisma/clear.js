const prisma = require("../src/models/PrismaService");

async function clearDatabase() {
  try {
    
    await prisma.cartItem.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.user.deleteMany({});
    
    console.log('Banco de dados limpo com sucesso!');
  } catch (error) {
    console.error('Erro ao limpar o banco:', error);
  } finally {
    await prisma.$disconnect();
  }
}

clearDatabase();
const prisma = require("../src/models/PrismaService");
const bcrypt = require('bcrypt');

async function seed() {
    // User Init
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync("senha123", salt);
    await prisma.user.create({
        data: {
            username: 'Danilo e Gabriel',
            password: hash
        }
    })

    // Products Init
    await prisma.product.createMany({
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

    console.log('Database seeded');
    await prisma.$disconnect();
}

seed().catch(e => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
});
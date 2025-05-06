// @ts-nocheck

window.app.service('ProductsService', function ($http) {
    let products = [];
    let cart = [];

    async function fetchProducts() {
        const response = await fetch('./products');
        products = await response.json();
        return products;
    }

    async function addToCart(product) {
        console.log(product)
        const response = await fetch('./cart/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: 'Danilo e Gabriel', productId: product.id, quantity: 1 })
        }).then((v) => {
            console.log('Aeee')
            console.log(v)
        }, (e) => {
            console.log('Erro...')
            console.error(e)
        });
        console.log(response)
    }

    async function getCartItems() {
        const response = await fetch('./cart/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'Danilo e Gabriel' })
        });
        const data = await response.json();
        console.log(data)
        const products = data.map(v => { return { id: v.productId, name: v.produto.name, price: v.produto.price, description: v.produto.description, quantity: v.quantity } });
        console.log(products)
        return products;
    }

    return {
        getAll: () => fetchProducts(),
        addToCart: (product) => addToCart(product),
        getCartItems: () => getCartItems()
    }
});
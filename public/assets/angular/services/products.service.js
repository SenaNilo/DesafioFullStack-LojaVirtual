// @ts-nocheck

window.app.service('ProductsService', function ($http) {
    let username = 'Danilo e Gabriel';
    let products = [];
    let cart = [];

    async function fetchProducts() {
        const response = await fetch('./products');
        products = await response.json();
        return products;
    }

    async function addToCart(product) {
        await fetch('./cart/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, productId: product.id, quantity: 1 })
        });
    }

    async function getCartItems() {
        const response = await fetch('./cart/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username })
        });
        const data = await response.json();
        const products = data.map(({ productId, produto, quantity }) => {
            return {
                id: productId,
                name: produto.name,
                price: produto.price,
                description: produto.description,
                quantity: quantity
            }
        });
        return products;
    }

    async function removeFromCart(product, user) {
        const response = await fetch(`./cart/delete/${product.id}/${user.id}`, { method: 'DELETE' })
            .then((res) => console.log(res))
    }

    return {
        getAll: () => fetchProducts(),
        addToCart: (product) => addToCart(product),
        getCartItems: () => getCartItems(),
        removeFromCart: (product, user) => removeFromCart(product, user)
    }
});
// @ts-nocheck

window.app.service('ProductsService', function ($http, AuthService) {
    let products = [];
    let cart = [];

    async function fetchProducts() {
        const url = './products';
        const response = await fetch(url);
        products = await response.json();
        return products;
    }

    async function addToCart(product) {
        const url = './cart/add';
        const method = 'POST';
        const contentType = 'application/json';
        const headers = { 'Content-Type': contentType };
        const user = AuthService.getUser();

        const body = JSON.stringify({ username: user.username, productId: product.id, quantity: 1 });

        await fetch(url, { method, headers, body });
        return cart;
    }

    async function getCartItems() {
        const url = './cart/';
        const method = 'POST';
        const contentType = 'application/json';
        const headers = { 'Content-Type': contentType };
        const user = AuthService.getUser();

        const body = JSON.stringify({ username: user.username });

        const response = await fetch(url, { method, headers, body });
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

    async function removeFromCart({ product, user }) {
        const url = `./cart/delete/${product.id}/${user.id}`;
        const method = 'DELETE';

        const response = await fetch(url, { method });
    }

    return {
        getAll: () => fetchProducts(),
        addToCart: (product) => addToCart(product),
        getCartItems: () => getCartItems(),
        removeFromCart: ({ product, user }) => removeFromCart({ product, user })
    }
});
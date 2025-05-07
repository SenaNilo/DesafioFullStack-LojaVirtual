// @ts-nocheck

window.app.service('ProductsService', function ($http) {
    let products = [];
    let cart = [];
    let productId = 0;

    async function fetchProducts() {
        const url = './products';
        const response = await fetch(url);
        products = await response.json();
        return products;
    }

    async function addToCart(productId, username) {
        const url = './cart/add';
        const method = 'POST';
        const contentType = 'application/json';
        const headers = { 'Content-Type': contentType };

        const body = JSON.stringify({ username, productId, quantity: 1 });

        await fetch(url, { method, headers, body });
        return cart;
    }

    async function getCartItems(user) {
        const url = './cart/';
        const method = 'POST';
        const contentType = 'application/json';
        const headers = { 'Content-Type': contentType };

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

    async function removeFromCart(productId, userId) {
        const url = `./cart/delete/${productId}/${userId}`;
        const method = 'DELETE';
        const response = await fetch(url, { method });
    }

    function setProduct() {

    }

    return {
        getAll: () => fetchProducts(),
        addToCart: (productId, username) => addToCart(productId, username),
        getCartItems: (user) => getCartItems(user),
        removeFromCart: (productId, userId) => removeFromCart(productId, userId)
    }
});
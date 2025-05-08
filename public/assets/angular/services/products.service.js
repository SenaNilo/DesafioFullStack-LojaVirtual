// @ts-nocheck

window.app.service('ProductsService', function ($http) {
    let products = [];
    let cart = [];

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

    async function updateQuantity(productId, userId, newQuantity) {
        const url = `./cart/update/${productId}/${userId}`
        const method = 'PUT';
        const contentType = 'application/json';
        const headers = { 'Content-Type': contentType };

        const body = JSON.stringify({ quantity: newQuantity });

        const response = await fetch(url, { method, headers, body });

        const data = await response.json();

        if (!response.ok) {
            alert('Erro ao atualizar a quantidade.');
        }

        return data;
    }

    function setProduct(prod) {
        localStorage.setItem('selectedProduct', JSON.stringify(prod));
    }

    function getProduct() {
        const prod = localStorage.getItem('selectedProduct');
        return prod ? JSON.parse(prod) : {};
    }

    return {
        getAll: () => fetchProducts(),
        getProduct: () => getProduct(),
        setProduct: (product) => setProduct(product),
        addToCart: (productId, username) => addToCart(productId, username),
        getCartItems: (user) => getCartItems(user),
        removeFromCart: (productId, userId) => removeFromCart(productId, userId),
        updateQuantity: (productId, userId, newQuantity) => updateQuantity(productId, userId, newQuantity)
    }
});
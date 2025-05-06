// @ts-nocheck

window.app.service('CarrinhoService', function () {
    const carrinho = [];

    return {
        getAll: () => carrinho
    }
});
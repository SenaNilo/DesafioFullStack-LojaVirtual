// @ts-nocheck

window.app.controller('CarrinhoController', function ($scope, ProductsService) {
    $scope.carrinho = [];

    async function getCartItems() {
        $scope.carrinho = await ProductsService.getCartItems();
        $scope.$apply();
    }

    getCartItems();
});
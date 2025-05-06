// @ts-nocheck

window.app.controller('CartController', function ($scope, ProductsService) {
    $scope.cart = [];

    async function loadCart() {
        $scope.carrinho = await ProductsService.getCartItems();
        $scope.$apply();
    }

    loadCart();
});
// @ts-nocheck

window.app.controller('CartController', function ($scope, ProductsService) {
    $scope.cart = [];

    async function loadCart() {
        $scope.cart = await ProductsService.getCartItems();
        $scope.$apply();
    }

    $scope.remove = async (product) => {
        const user = { id: 3 }
        await ProductsService.removeFromCart(product, user);
        $scope.$apply();
    }

    loadCart();
});
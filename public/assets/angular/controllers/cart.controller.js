// @ts-nocheck

window.app.controller('CartController', function ($scope, ProductsService, AuthService) {
    $scope.cart = [];

    async function loadCart() {
        const user = await AuthService.getUser();
        $scope.cart = await ProductsService.getCartItems(user);
        $scope.$apply();
    }

    $scope.remove = async (product) => {
        const user = await AuthService.getUser();
        await ProductsService.removeFromCart(product.id, user.id);
        $scope.$apply();
    }

    loadCart();
});
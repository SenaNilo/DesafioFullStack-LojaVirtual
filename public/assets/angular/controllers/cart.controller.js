// @ts-nocheck

window.app.controller('CartController', function ($scope, ProductsService, AuthService) {
    $scope.cart = [];
    $scope.hasProducts = false;

    async function loadCart() {
        const user = await AuthService.getUser();
        $scope.cart = await ProductsService.getCartItems(user);

        $scope.hasProducts = ($scope.cart.length === 0) ? true : false;
        console.log($scope.hasProducts)
        $scope.$apply();
    }

    $scope.remove = async (product) => {
        const user = await AuthService.getUser();
        await ProductsService.removeFromCart(product.id, user.id);
        loadCart();
        $scope.$apply();
    }

    $scope.returnCardapio = () => {
        window.location.href = "./cardapio.html"
    }

    loadCart();
});
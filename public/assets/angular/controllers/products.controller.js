// @ts-nocheck

window.app.controller('ProductsController', function ($scope, ProductsService, AuthService) {
    $scope.products = [];
    $scope.localCurrency = 'R$'

    $scope.addToCart = async (product) => {
        const user = await AuthService.getUser();
        await ProductsService.addToCart(product.id, user.username);
        $scope.$apply();
    }

    async function loadProducts() {
        $scope.products = await ProductsService.getAll();
        $scope.$apply();
    }

    loadProducts();
});
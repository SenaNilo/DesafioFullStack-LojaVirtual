// @ts-nocheck

window.app.controller('ProductsController', function ($scope, ProductsService, AuthService) {
    $scope.products = [];

    $scope.addToCart = async (product) => {
        const user = await AuthService.getUser();
        await ProductsService.addToCart(product, user);
        $scope.$apply();
    }

    async function loadProducts() {
        $scope.products = await ProductsService.getAll();
        $scope.$apply();
    }

    loadProducts();
});
// @ts-nocheck

window.app.controller('ProductsController', function ($scope, ProductsService) {
    $scope.products = [];

    $scope.addToCart = async (product) => {
        await ProductsService.addToCart(product);
        $scope.$apply();
    }

    async function loadProducts() {
        $scope.products = await ProductsService.getAll();
        $scope.$apply();
    }

    loadProducts();
});
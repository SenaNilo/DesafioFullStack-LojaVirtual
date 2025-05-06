// @ts-nocheck

window.app.controller('ProductsController', function ($scope, ProductsService) {
    $scope.products = [];

    async function fetchProducts() {
        $scope.products = await ProductsService.getAll();
        $scope.$apply();
    }

    $scope.addToCart = async function addToCart(product) {
        await ProductsService.addToCart(product)
        $scope.$apply();
    }

    fetchProducts();
});
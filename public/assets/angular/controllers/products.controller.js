// @ts-nocheck

window.app.controller('ProductsController', function ($scope, CarrinhoService) {
    $scope.products = CarrinhoService.getAll();

    async function fetchProducts() {
        const response = await fetch('./products');
        $scope.products = await response.json();
        $scope.$apply();
    }

    fetchProducts();
});
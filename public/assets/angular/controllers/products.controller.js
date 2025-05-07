// @ts-nocheck

window.app.controller('ProductsController', function ($scope, ProductsService, AuthService) {
    $scope.products = [];
    $scope.localCurrency = 'R$';
    $scope.search = '';

    async function loadProducts() {
        $scope.products = await ProductsService.getAll();
        $scope.$apply();
    }

    $scope.redirectToProduct = (product) => {
        ProductsService.setProduct(product);
        const prod = ProductsService.getProduct();
        window.location.href = "./product.html";
    }

    loadProducts();
});
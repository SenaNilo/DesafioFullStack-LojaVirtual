// @ts-nocheck

window.app.controller('ItemController', function ($scope, AuthService, ProductsService) {

    $scope.item = {
        id: 0,
        name: '',
        price: 0,
        description: ''
    }

    $scope.addToCart = async (product) => {
        const user = await AuthService.getUser();
        await ProductsService.addToCart(product.id, user.username);
        $scope.$apply();
        window.location.href = "./cart.html";
    }

    function loadItem() {
        $scope.item = ProductsService.getProduct();
    }

    loadItem();
});
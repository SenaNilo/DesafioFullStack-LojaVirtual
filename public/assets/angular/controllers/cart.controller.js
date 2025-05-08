// @ts-nocheck

window.app.controller('CartController', function ($scope, ProductsService, AuthService) {
    $scope.cart = [];
    $scope.hasProducts = false;

    async function loadCart() {
        const user = await AuthService.getUser();
        $scope.cart = await ProductsService.getCartItems(user);

        $scope.hasProducts = ($scope.cart.length === 0) ? true : false;
        $scope.$apply();
    }

    $scope.remove = async (product) => {
        const user = await AuthService.getUser();

        await ProductsService.removeFromCart(product.id, user.id);
        loadCart();
        $scope.$apply();
    }

    $scope.returnCardapio = () => {
        window.location.href = "./dishes.html"
    }

    $scope.updateQuantity = async (product, change) => {
        const user = await AuthService.getUser()

        const newQuantity = product.quantity + change;
        if (newQuantity < 1) {
            alert('Quantidade não pode ser menor que 1.')
            return
        }

        const data = await ProductsService.updateQuantity(product.id, user.id, newQuantity)

        loadCart()
        $scope.$apply()
    };

    loadCart();
});
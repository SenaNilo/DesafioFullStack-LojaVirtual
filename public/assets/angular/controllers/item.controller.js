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

    $scope.createProduct = async () => {
        // fazer dps
        let name = $scope.item.name
        let price = $scope.item.price
        let description = $scope.item.description

        try {
            const response = await fetch('http://localhost:3000/products/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    price,
                    description
                })
            })

            alert("Produto Cadastrado!")
            $scope.item.name = ""
            $scope.item.price = 0
            $scope.item.description = ""

            $scope.$apply()
            window.location.href = "./cardapio.html";
        } catch (error) {
            alert("Produto não Cadastrado!")
            console.log(error)
        }
    }

    loadItem();
});
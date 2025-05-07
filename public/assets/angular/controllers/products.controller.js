// @ts-nocheck

window.app.controller('ProductsController', function ($scope, ProductsService, AuthService) {
    $scope.products = [];
    $scope.localCurrency = 'R$';
    $scope.search = '';
    $scope.item = {
        id: 0,
        name: '',
        price: 0,
        description: ''
    }

    async function loadProducts() {
        $scope.products = await ProductsService.getAll();
        $scope.$apply();
    }

    $scope.redirectToProduct = (product) => {
        ProductsService.setProduct(product);
        const prod = ProductsService.getProduct();
        window.location.href = "./product.html";
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

    loadProducts();
});
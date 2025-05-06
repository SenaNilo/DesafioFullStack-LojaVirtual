// @ts-nocheck

window.app.controller('CarrinhoController', function ($scope, CarrinhoService) {
    $scope.carrinho = CarrinhoService.carrinho;
});
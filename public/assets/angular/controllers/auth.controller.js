// @ts-nocheck

window.app.controller('AuthController', function ($scope, $http) {

    $scope.user = {
        'username': '',
        'password': ''
    }

    $scope.send = async () => {
        // const request = await $http.post('./auth/login', $scope.user);
        // request.success((resp) => { });
    }

})
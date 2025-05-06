// @ts-nocheck

window.app.controller('AuthController', function ($scope, $http) {

    $scope.user = {
        username: '',
        password: 0
    }

    $scope.send = async () => {
        // const request = await $http.post('./auth/login', $scope.user);
        // request.success((resp) => { });

        let username = $scope.user.username
        let password = $scope.user.password

        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });

          const data = await response.json();

          if (data.token) {
            alert('Login bem-sucedido!');
            // Salvar o token
            localStorage.setItem('token', data.token);
          } else {
            alert('Erro ao fazer login!');
          }
    }

})
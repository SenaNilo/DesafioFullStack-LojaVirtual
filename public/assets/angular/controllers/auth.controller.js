// @ts-nocheck

window.app.controller('AuthController', function ($scope, $http) {

    $scope.user = {
        username: '',
        password: ''
    }

    $scope.send = async () => {
        // const request = await $http.post('./auth/login', $scope.user);
        // request.success((resp) => { });

        let name = $scope.user.username
        let pass = $scope.user.password

        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                username: name, 
                password: pass
            }),
          });

          const data = await response.json();

          if (data.token) {
            alert('Login bem-sucedido!');

            // Salvar o token
            localStorage.setItem('token', data.token);

            window.location.href = "../../index.html"
          } else {
            alert('Erro ao fazer login!');
            $scope.user.username = ""
            $scope.user.password = ""
            $scope.$apply()
          }
    }

})
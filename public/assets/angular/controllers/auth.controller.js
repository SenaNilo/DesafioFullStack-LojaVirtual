// @ts-nocheck

window.app.controller('AuthController', function ($scope, AuthService) {

    $scope.user = {
        username: '',
        password: ''
    }

    $scope.send = async () => {
        let name = $scope.user.username;
        let pass = $scope.user.password;

        const response = await fetch('./auth/login', {
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
            localStorage.setItem('token', data.token);
            await AuthService.setUser();
            window.location.href = "../../index.html"
        } else {
            alert('Erro ao fazer login!');
            $scope.user.username = ""
            $scope.user.password = ""
            $scope.$apply()
        }
    }

})
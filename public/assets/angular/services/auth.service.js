// @ts-nocheck

window.app.service('AuthService', function () {
    let user = {
        id: 0,
        username: ''
    };

    async function setUser() {
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token não encontrado no localStorage');
            return null;
        }

        const request = await fetch('./auth/token', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (!request.ok)
            console.log("token invalido IIIIIIIFFFF")


        const data = await request.json();

        user.id = data.userId;
        user.username = data.username;
    }

    async function getUser() {
        await setUser();


        return user;
    }

    return {
        setUser: () => setUser(),
        getUser: () => getUser()
    }
})
// @ts-nocheck

window.app.service('AuthService', function () {
    let user = {
        id: 0,
        username: ''
    };

    async function setUser() {
        const token = localStorage.getItem('token');
        const request = await fetch('http://localhost:3000/auth/token', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
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
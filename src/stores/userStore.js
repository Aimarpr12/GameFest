import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        users: JSON.parse(localStorage.getItem('users')) || [
            { email: 'user@example.com', password: 'password', role: 'user' },
            { email: 'admin@example.com', password: 'adminpassword', role: 'admin' }
        ],
        user: JSON.parse(localStorage.getItem('user')) || null,
        isAuthenticated: !!localStorage.getItem('user'),
    }),
    actions: {
        loadUsers() {
            const storedUsers = localStorage.getItem('users');
            if (!storedUsers) {
                localStorage.setItem('users', JSON.stringify(this.users));
            }
        },
        login(credentials) {
            const foundUser = this.users.find(user => user.email === credentials.email && user.password === credentials.password);
            if (foundUser) {
                this.user = foundUser;
                this.isAuthenticated = true;
                localStorage.setItem('user', JSON.stringify(foundUser));
                return true;
            } else {
                throw new Error('Credenciales incorrectas');
            }
        },
        logout() {
            this.user = null;
            this.isAuthenticated = false;
            localStorage.removeItem('user');
        },
        register(newUser) {
            const userExists = this.users.some(user => user.email === newUser.email);
            if (userExists) {
                throw new Error('El correo ya está registrado');
            }
            newUser.role = 'user';
            this.users.push(newUser);
            localStorage.setItem('users', JSON.stringify(this.users));
            this.login(newUser);
        }
    }
});

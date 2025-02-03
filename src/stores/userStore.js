import { defineStore } from 'pinia';
import { useEventStore } from '@/stores/eventStore';


export const useUserStore = defineStore('userStore', {
    state: () => ({
        users: JSON.parse(localStorage.getItem('users')) || [
            { email: 'user@example.com', password: 'password', role: 'user', events: [] },
            { email: 'admin@example.com', password: 'adminpassword', role: 'admin', events: [] }
        ],
        user: JSON.parse(localStorage.getItem('user')) || null,
        isAuthenticated: !!localStorage.getItem('user'),
    }),
    actions: {
        loadUsers() {
            if (!localStorage.getItem('users')) {
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
            if (this.users.some(user => user.email === newUser.email)) {
                throw new Error('El correo ya está registrado');
            }
            newUser.role = 'user';
            newUser.events = [];
            this.users.push(newUser);
            localStorage.setItem('users', JSON.stringify(this.users));
            this.login(newUser);
        },
        joinEvent(eventId) {
            debugger;
            if (!this.isAuthenticated) {
                throw new Error('Debes iniciar sesión para inscribirte en eventos');
            }

            const eventStore = useEventStore();
            const event = eventStore.events.find(e => e.id === eventId);

            if (!event) {
                throw new Error('Evento no encontrado');
            }

            if (this.user.events.includes(eventId)) {
                throw new Error('Ya estás inscrito en este evento');
            }

            this.user.events.push(eventId);
            event.plazasLibres -= 1;
            event.asistentes = event.asistentes || [];
            event.asistentes.push(this.user.email);

            localStorage.setItem('user', JSON.stringify(this.user));
            localStorage.setItem('events', JSON.stringify(eventStore.events));
        },
        leaveEvent(eventId) {
            if (!this.isAuthenticated) {
                throw new Error('Debes iniciar sesión para cancelar tu inscripción');
            }

            const eventStore = useEventStore();
            const event = eventStore.events.find(e => e.id === eventId);

            if (!event) {
                throw new Error('Evento no encontrado');
            }

            this.user.events = this.user.events.filter(id => id !== eventId);
            event.plazasLibres += 1;
            event.asistentes = event.asistentes.filter(email => email !== this.user.email);

            localStorage.setItem('user', JSON.stringify(this.user));
            localStorage.setItem('events', JSON.stringify(eventStore.events));
        }
    }
});

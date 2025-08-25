import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to start up the application
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// If we are in development mode and in isolation, call the mount function immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_dashboard-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// When we are running through the container, we should export the mount function
export { mount };
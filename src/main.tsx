import { createRouter } from './core/router';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';

createRouter({
    '/': HomePage,
    '/about': AboutPage,
});

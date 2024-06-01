import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import RegisterPage from './components/RegisterPage.vue';
import LoginPage from './components/LoginPage.vue';
import PokedexPage from './components/PokedexPage.vue';
import './assets/global.css';

// Define las rutas
const routes = [
  { path: '/|(PokePage)', component: HomePage },
  { path: '/register', component: RegisterPage},
  { path: '/login', component: LoginPage },
  { path: '/pokedex', component: PokedexPage}
];

// Crea el enrutador
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Crea la aplicación Vue
const app = createApp(App);

// Usa el enrutador
app.use(router);

// Monta la aplicación
app.mount('#app');
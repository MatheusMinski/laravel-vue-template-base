import './bootstrap';

import { createApp } from 'vue'

import App from '../Components/App.vue'
import Navbar from '../Components/Layouts/Navbar.vue'

const app = createApp(App)

app.component('navbar', Navbar)

app.mount('#app')
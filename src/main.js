import components from "@/components/UI";
import directives from "@/directives";
import router from "@/router/router";
import { createApp } from 'vue'
import store from "@/store"
import App from './App.vue'

import "@/assets/styles/style.css";

const app = createApp(App)

console.log(components)

components.forEach(component => {
    app.component(component.name, component)
})
directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.use(router)
   .use(store)
   .mount('#app')

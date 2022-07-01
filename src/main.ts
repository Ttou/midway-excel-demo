import { createApp } from 'vue'

import App from './App'

async function bootstrap() {
  const app = createApp(App)

  app.mount('#app')
}
bootstrap()

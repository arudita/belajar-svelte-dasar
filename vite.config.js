import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rolldownOptions: {
      input: {
        index: 'index.html',
        hello: 'hello.html',
        auto_counter: 'auto-counter.html',
        global_counter: 'global-counter.html',
        say_hello: 'say-hello.html',
        user: 'user.html'
      }
    }
  }
})

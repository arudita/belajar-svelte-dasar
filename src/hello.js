import { mount } from 'svelte'
import './app.css'
import Hello from './lib/Hello.svelte'

const app = mount(Hello, {
  target: document.getElementById('app'),
})

export default app

import { Router } from 'svelte-routing';
import App from './App.svelte';


const app = new App({
  target: document.body,
  props: {},
});

export default app;

new Router({
  target: document.body,
});

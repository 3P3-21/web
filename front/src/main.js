import { Router } from 'svelte-routing';
import App from './App.svelte';
import { goto } from 'svelte-routing';

const app = new App({
  target: document.body,
  props: {},
});

export default app;

new Router({
  target: document.body,
});

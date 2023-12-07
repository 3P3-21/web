import { Router } from 'svelte-routing';
import App from './App.svelte';
<<<<<<< HEAD

=======
import { goto } from 'svelte-routing';
>>>>>>> d52b86f564f1f50ee45aae772cb78e92545f9b60

const app = new App({
  target: document.body,
  props: {},
});

export default app;

new Router({
  target: document.body,
});

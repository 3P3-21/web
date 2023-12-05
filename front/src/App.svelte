<script>
	import Autorisation from './components/autorisation.svelte'
    import Registration from './components/registration.svelte';
	import { Router, Route } from "svelte-routing";
	
	

	
</script>
<Router>
	<Route path="/" component={Autorisation} />
	<Route path="/registration" component={Registration} />
  </Router>

<Autorisation />


<style>

</style>
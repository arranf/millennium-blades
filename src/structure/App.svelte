<script lang="ts">

  import Header from "../structure/Header.svelte";
  import Countdown from "../structure/Countdown.svelte";

  import Home from "../routes/Home.svelte";
  import Scoring from "../routes/Scoring.svelte";

	import { Router, Route } from "svelte-navigator";


  export let url = "";
</script>

<Router url="{url}">
  <Header />
  <Countdown />

  <main>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/scoring">
    <Scoring />
  </Route>
  </main> 
</Router>

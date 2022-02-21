<script lang="ts">
  
  import Header from "../structure/Header.svelte";
  import Countdown from "../structure/Countdown.svelte";

  import Home from "../routes/Home.svelte";

	import { Router, Route } from "svelte-navigator";
</script>

<main>
  <Header />
  <Countdown />
  <Router>
    <Route path="/">
      <Home />
    </Route>
  </Router>
</main>

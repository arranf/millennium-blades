<script lang="ts">
  
  import Header from "../structure/Header.svelte";
  import Countdown from "../structure/Countdown.svelte";

  import Home from "../routes/Home.svelte";
  import Scoring from "../routes/Scoring.svelte";

	import { Router, Route } from "svelte-navigator";
</script>

<main>
  <Router>
  <Header />
  <Countdown />
    <Route path="/">
      <Home />
      <Scoring />
    </Route>
  </Router>
</main>

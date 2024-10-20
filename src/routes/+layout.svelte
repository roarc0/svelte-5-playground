<script lang="ts">
  import type { Snippet } from "svelte";

  import "../app.css";

  import Header from "../lib/components/layout/Header.svelte";
  import Footer from "../lib/components/layout/Footer.svelte";

  import Toaster from "$lib/components/toast/toaster.svelte";
  import { setToastState } from "$lib/components/toast/toast-state.svelte";

  let { children }: { children: Snippet } = $props();

  setToastState();
</script>

<div class="flex flex-col min-h-screen">
	<Toaster/>
  <Header />

  <main class="flex flex-col flex-1 p-4 w-full max-w-4xl mx-auto box-border">
		{@render children()}
  </main>

  <Footer />
</div>

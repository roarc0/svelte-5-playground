<script lang="ts">
  import { createCounter } from "./counterfn.svelte";

  let { init: init = 0 } = $props();

  const counter = createCounter(init);
</script>

{#snippet counterButton(label: string, fn : () => void)}
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded"
  onclick={fn}>
  {label}
</button>
{/snippet}

{@render counterButton("inc", counter.increment)}
{@render counterButton("dec", counter.decrement)}
{@render counterButton("reset", counter.reset)}
<h1
  class="max-w-fit text-lg m-1 py-2 px-4 rounded border border-gray-700 border-spacing-1"
>
  {counter.count}
</h1>

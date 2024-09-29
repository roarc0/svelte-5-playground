<script lang="ts">
  import Counter from "./Counter.svelte";
</script>

<svelte:head>
  <title>Count</title>
  <meta name="description" content="Count" />
</svelte:head>

<section>
  <h1 class="mb-4 text-xl font-semibold">Counter</h1>
</section>

<div class="w-1/2 mx-auto p-4">
  <Counter initCount={1} />
</div>

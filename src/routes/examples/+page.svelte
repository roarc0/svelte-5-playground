<script>
  import { page } from "$app/stores";
  import { examplesList } from "$lib/generated/examples";
</script>

<svelte:head>
  <title>Examples</title>
  <meta name="description" content="Snippets" />
</svelte:head>

<div class="max-w-screen-md mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Examples</h1>

  <p class="mb-4">This page shows some svelte 5 examples.</p>

  <ul class="list-disc pl-4 mb-4">
    {#each examplesList as example}
      <li>
        <a
          href="{$page.url.pathname}/{example}"
          class="text-blue-500 hover:underline">{example}</a
        >
      </li>
    {/each}
  </ul>
</div>

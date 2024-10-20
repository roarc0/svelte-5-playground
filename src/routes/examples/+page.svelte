<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Examples</title>
  <meta name="description" content="Snippets" />
</svelte:head>

<div class="max-w-screen-md mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Examples</h1>

  <p class="mb-4">This page shows some svelte 5 examples.</p>

  <ul class="list-disc pl-4 mb-4">
    <li>
      <a
        href="{$page.url.pathname}/counter"
        class="text-blue-500 hover:underline">Counter</a
      >
    </li>
    <li>
      <a
        href="{$page.url.pathname}/toaster"
        class="text-blue-500 hover:underline">Toaster</a
      >
    </li>
    <li>
      <a href="{$page.url.pathname}/runes" class="text-blue-500 hover:underline"
        >Runes</a
      >
    </li>
  </ul>
</div>

<script lang="ts">
  import { getToastState } from "./toast/toast-state.svelte";

  const toastState = getToastState();

  let title = $state("");
  let message = $state("");
  let titleInput = $state<HTMLInputElement>();

  const submit = (e: Event) => {
    e.preventDefault();
    if (!title || !message) return;
    toastState.add(title, message);
    title = "";
    message = "";
    titleInput?.focus();
  };
</script>

<svelte:head>
  <title>Toaster</title>
  <meta name="description" content="Toaster" />
</svelte:head>

<section>
  <h1 class="mb-4 text-xl font-semibold">Toaster</h1>
</section>

<form
  onsubmit={submit}
  class="form w-1/2 rounded-sm border border-gray-800 bg-gray-200"
>
  <div class="input-group">
    <label for="title">Title</label>
    <input
      class="w-full rounded-sm border border-gray-800 p-1"
      id="title"
      bind:this={titleInput}
      bind:value={title}
    />
  </div>
  <div class="input-group">
    <label for="message">Message</label>
    <input
      class="w-full rounded-sm border border-gray-800 p-1"
      id="message"
      bind:value={message}
    />
  </div>
  <div class="button-group">
    <button class="rounded-sm bg-gray-400 py-1 px-8"> Add toast! </button>
  </div>
</form>

<style lang="postcss">
  .form {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    margin: 2rem;
    padding: 1rem;
  }

  .input-group {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    justify-items: end;
    align-items: baseline;
  }

  .button-group {
    grid-column: 1 / -1;
    display: grid;
    justify-content: center;
    align-items: center;
  }
</style>

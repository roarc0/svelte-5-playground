<script lang="ts">
  import type { Toast } from "./toast";
  import { getToastState } from "./toast-state.svelte";

  type Props = {
    toast: Toast;
  };

  let { toast }: Props = $props();
  const toastState = getToastState();
</script>

<div
  class="relative flex h-14 w-56 items-center justify-between rounded-lg bg-gray-50 px-4 py-2 shadow-lg"
>
  <div class="flex flex-col">
    <span class="text-sm font-semibold">{toast.title}</span>
    <span class="text-xs text-gray-600">{toast.message}</span>
  </div>
  <button
    class="text-gray-400 hover:text-gray-600 transition-colors"
    onclick={() => toastState.remove(toast.id)}
    aria-label="Close toast"
  >
    &times;
  </button>
</div>

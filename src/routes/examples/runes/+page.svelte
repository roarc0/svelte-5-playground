<script lang="ts">
  interface MyProps {
    name: string;
    count?: number;
    numbers?: number[];
    partOfEverythingElse?: boolean;
  }

  let {
    name = $bindable(), // The parent can (can, not must) then also bind: to them.
    count = 1,
    numbers = [1, 2, 3],
    ...everythingElse
  }: MyProps = $props();

  let doubled = $derived(count * 2);

  let total = $derived.by(() => {
    let total = 0;
    for (const n of numbers) {
      total += n;
    }
    return total;
  });

  import { tick } from "svelte";

  let div: HTMLElement | undefined = $state();

  $effect.pre(() => {
    if (!div) return; // not yet mounted

    // reference `numbers` array length so that this code re-runs whenever it changes
    numbers.length;

    if (div.offsetHeight + div.scrollTop > div.scrollHeight - 20) {
      tick().then(() => {
        div?.scrollTo(0, div?.scrollHeight);
      });
    }
  });

  $inspect(name, count, everythingElse); // like console log
</script>

<div class="border p-4 h-100 overflow-y-auto m-4">
  <button
    class="bg-blue-500 text-white p-2 rounded mb-2"
    onclick={() => count++}>Increment count</button
  >
  <p>count: {count}, doubled: {doubled}</p>
</div>

<div class="border p-4 h-100 overflow-y-auto m-4" bind:this={div}>
  <button
    class="bg-blue-500 text-white p-2 rounded mb-2"
    onclick={() => {
      numbers = [...numbers, Math.floor(Math.random() * 10)];
    }}>Add random number</button
  >
  <span>
    The numbers are:
    {#each numbers as number}
      <p class="mr-2">{number}</p>
    {/each}
  </span>
  <p>
    Their total sum is: {total}
  </p>
</div>

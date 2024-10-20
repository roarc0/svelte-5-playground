<script lang="ts" generics="T">
	import type { Snippet } from 'svelte';

	let { data, children, row }: {
		data: T[];
		children: Snippet;
		row: Snippet<[T]>;
	} = $props();

</script>

<table>
	{#if children}
		<thead>
			<tr>{@render children()}</tr>
		</thead>
	{/if}

	<tbody>
		{#each data as d}
			<tr>{@render row(d)}</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		text-align: left;
		border-spacing: 0;
	}

	tbody tr:nth-child(2n+1) {
		background: #eee;
	}

	table :global(th), table :global(td) {
		padding: 0.5em;
	}
</style>
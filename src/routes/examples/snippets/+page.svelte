<script lang="ts">

interface Image {
  src: string;
  caption: string;
  width: number;
  height: number;
  href?: string;
}

let images: Image[] = [
  {
    src: 'https://cataas.com/cat?tag=cute',
    caption: 'A kitten',
    width: 200,
    height: 300
  },
  {
    src: 'https://cataas.com/cat?tag=angry',
    caption: 'Another kitten',
    width: 300,
    height: 200
  },
  {
    src: 'https://cataas.com/cat?tag=funny',
    caption: 'Yet another kitten',
    width: 250,
    height: 250
  }
];

// ----

import Table from './Table.svelte';

const fruits = [
  { name: 'apples', qty: 5, price: 2 },
  { name: 'bananas', qty: 10, price: 1 },
  { name: 'cherries', qty: 20, price: 0.5 }
];

</script>

<!-- snippet to render images -->

{#snippet figure(image: Image )}
	<figure>
		<img
			src={image.src}
			alt={image.caption}
			width={image.width}
			height={image.height}
		/>
		<figcaption>{image.caption}</figcaption>
	</figure>
{/snippet}

{#each images as image}
	{#if image.href}
		<a href={image.href}>
			{@render figure(image)}
		</a>
	{:else}
		{@render figure(image)}
	{/if}
{/each}

<!-- snippet self referencing -->

{#snippet blastoff()}
	<span>🚀</span>
{/snippet}

{#snippet countdown(n: number)}
	{#if n > 0}
		<span>{n}...</span>
		{@render countdown(n - 1)}
	{:else}
		{@render blastoff()}
	{/if}
{/snippet}

{@render countdown(10)}

<!-- passing snippets to components with generics -->

<Table data={fruits}>
	<th>fruit</th>
	<th>qty</th>
	<th>price</th>
	<th>total</th>

	{#snippet row(d)}
		<td>{d.name}</td>
		<td>{d.qty}</td>
		<td>{d.price}</td>
		<td>{d.qty * d.price}</td>
	{/snippet}
</Table>
<script lang="ts">
  import type { PageProps } from './$types';
  import Header from './Header.svelte';
  import NodeCard from './NodeCard.svelte';
  import ErrorDialog from './ErrorDialog.svelte';
  import Footer from './Footer.svelte';
  let { data }: PageProps = $props();
  const { nodes } = data;
</script>

<article class="flex min-h-screen w-full flex-col">
  <Header />
  <div class="grow">
    {#if data.error.title === null}
      <div class="bg-white md:m-auto md:max-w-2/3">
        <ol>
          {#each nodes as node (node.publicKey)}
            <li>
              <NodeCard {...node} />
            </li>
          {/each}
        </ol>
      </div>
    {:else}
      <ErrorDialog {...data.error} />
    {/if}
  </div>
  <Footer />
</article>

<style lang="postcss">
  /* required to use tailwind inside style tags */
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(--color-slate-600);
  }
</style>

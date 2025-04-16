<script lang="ts">
  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { nodes } = data;
</script>

<article class="w-full">
  <header
    class="bg-black px-8 py-4 text-white md:fixed md:top-0 md:right-0 md:left-0 md:h-20 md:shadow-xl"
  >
    <h1 class="flex justify-center text-lg">Top Lightning Network Nodes</h1>
    <p class="flex justify-center text-sm/8">
      Ordered by Connectivity <a href="#fn1" aria-describedby="fn1" class="underline">*</a>
    </p>
  </header>
  <a id="list-header" class="md:h-30 md:block"/>
  <ol class="bg-white md:m-auto md:max-w-2/3">
    {#each nodes as node}
      <li class="flex justify-between border-b border-zinc-500 p-2">
        <dd class="max-w-2/3 truncate">{node.alias}</dd>
        <dt class="text-gray-600">{node.channels}</dt>
      </li>
    {/each}
  </ol>
  <footer class="bg-black text-sm text-white">
    <div id="footnotes">
      <ol>
        <li id="fn1">
          source: <a class="underline" href="https://mempool.space/lightning/nodes/rankings/connectivity"
            >mempool.space</a
          > <a href="#list-header" aria-label="Back to reference">↩</a>
        </li>
      </ol>
    </div>
  </footer>
</article>

<style lang="postcss">
  /* required to use tailwind inside style tags */
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(--color-slate-600);
  }
</style>

<script lang="ts">
  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { nodes } = data;
</script>

<article>
  <header id="list-header">
    <h1>Top Lightning Network Nodes</h1>
    <p>Ordered by Connectivity <sup><a href="#fn1" aria-describedby="fn1">1</a></sup></p>
  </header>
  <ol>
    {#each nodes as node}
      <li>
        <dd>{node.alias}</dd>
        <dt>{node.channels}</dt>
      </li>
    {/each}
  </ol>
  <footer>
    <div id="footnotes">
      <ol>
        <li id="fn1">
          source: <a href="https://mempool.space/lightning/nodes/rankings/connectivity"
            >mempool.space</a
          ><a href="#list-header" aria-label="Back to reference">↩</a>
        </li>
      </ol>
    </div>
  </footer>
</article>

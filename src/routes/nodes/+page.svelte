<script lang="ts">
  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { nodes } = data;
</script>

<h1>
Top Lightning Network Nodes
</h1>
<p>
  <span>Ordered by Connectivity</span>
  <small><span>(source: <a href="https://mempool.space/lightning/nodes/rankings/connectivity">mempool.space</a>)</span></small>
</p>
<ol>
  {#each nodes as node}
    <li>
      <dd>{node.alias}</dd>
      <dt>{node.channels}</dt>
    </li>
  {/each}
</ol>

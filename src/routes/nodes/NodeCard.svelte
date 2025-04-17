<script lang="ts">
  let { alias, channels, publicKey } = $props();
</script>

<div
  role="group"
  aria-describedby={`alias-${publicKey}`}
  class="group flex flex-col content-center gap-2 border-b border-zinc-500 p-2"
>
  <div class="flex flex-row justify-between">
    <h1 id={`alias-${publicKey}`} class="truncate">{alias}</h1>
    <div class="text-gray-600">{channels}</div>
  </div>
  <h2 class="text-align-right grow truncate text-left align-baseline text-xs text-slate-500">
    {publicKey}
  </h2>
</div>

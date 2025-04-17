<script lang="ts">
  let { alias, channels, publicKey } = $props();
</script>

<div class="group flex flex-col content-center gap-2 border-b border-zinc-500 p-2">
  <div class="flex flex-row justify-between">
    <dt class="truncate">{alias}</dt>
    <dd class="text-gray-600">{channels}</dd>
  </div>
  <dd class="text-align-right grow truncate text-left align-baseline text-xs text-slate-500">
    {publicKey}
  </dd>
</div>

<script lang="ts">
  let { alias, channels, publicKey, capacity, firstSeen, updatedAt, country } = $props();
  // TODO: maybe improve this hack to a more precise option using bigint or
  // something like that to prevent potential pitfalls of floating numbers
  function displayCapacity(capacityInSats) {
    const satoshisInOneBtc = 100_000_000;
    const decimalPlaces = 8;
    return (capacityInSats / satoshisInOneBtc).toFixed(decimalPlaces);
  }
</script>

<div
  role="group"
  aria-describedby={`alias-${publicKey}`}
  class="group flex flex-col content-center gap-2 border-b border-zinc-500 p-2"
>
  <div class="flex flex-row justify-between">
    <h1 id={`alias-${publicKey}`} title="alias" class="truncate">{alias}</h1>
    <div class="text-gray-600" title="channels">{channels}</div>
  </div>
  <div class="flex">
    <h2
      title="public key"
      class="text-align-right grow truncate text-left align-baseline text-xs text-slate-500"
    >
      {publicKey}
    </h2>
    <div class="text-sm text-gray-600" title="capacity">{displayCapacity(capacity)} BTC</div>
  </div>
</div>

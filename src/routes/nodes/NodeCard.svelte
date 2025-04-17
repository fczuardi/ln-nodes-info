<script lang="ts">
  let { alias, channels, publicKey, capacity, firstSeen, updatedAt, country } = $props();
  // TODO: maybe improve this hack to a more precise option using bigint or
  // something like that to prevent potential pitfalls of floating numbers
  function displayCapacity(capacityInSats) {
    const satoshisInOneBtc = 100_000_000;
    const decimalPlaces = 8;
    return (capacityInSats / satoshisInOneBtc).toFixed(decimalPlaces);
  }
  // TODO: take into consideration i18n
  // TODO: or even better, use a flag emoji
  function displayCountry(countryObject, language) {
    return countryObject?.[language] || 'not informed';
  }
  function displayDate(unixtime) {
    return new Date(unixtime * 1000).toLocaleDateString();
  }
  function displayDateTooltip(unixtime) {
    return new Date(unixtime * 1000).toISOString();
  }
</script>

<details
  aria-describedby={`alias-${publicKey}`}
  class="group flex flex-col content-center gap-2 border-b border-zinc-500 p-2"
>
  <summary class="flex flex-row justify-between">
    <h1 id={`alias-${publicKey}`} title="alias" class="grow truncate">{alias}</h1>
    <p class="mr-4 text-zinc-400 opacity-0 group-hover:opacity-100">click me</p>
    <div class="text-gray-600" title="channels">{channels}</div>
  </summary>

  <div class="flex">
    <h2
      title="public key"
      class="text-align-right grow truncate text-left align-baseline text-xs text-slate-500"
    >
      {publicKey}
    </h2>
    <div class="text-sm text-gray-600" title="capacity">{displayCapacity(capacity)} BTC</div>
  </div>
  <table class="mt-2 mb-2 w-full">
    <thead class="abhhg-zinc-300 p-2 text-sm font-bold text-zinc-400">
      <tr class="p-2">
        <td>First Seen</td>
        <td>Updated At</td>
        <td>Country</td>
      </tr>
    </thead>
    <tbody class="text-xs">
      <tr>
        <td title={displayDateTooltip(firstSeen)}>{displayDate(firstSeen)}</td>
        <td title={displayDateTooltip(updatedAt)}>{displayDate(updatedAt)}</td>
        <td>{displayCountry(country, 'en')}</td>
      </tr>
    </tbody>
  </table>
</details>

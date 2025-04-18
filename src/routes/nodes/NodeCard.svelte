<script lang="ts">
  import {
    displayCapacity,
    displayCountry,
    displayDate,
    displayDateTooltip,
  } from './valueRenderers';
  let { index, alias, channels, publicKey, capacity, firstSeen, updatedAt, country } = $props();
</script>

<details
  aria-describedby={`alias-${publicKey}`}
  class="group flex flex-col content-center gap-2 border-b border-zinc-500 bg-white transition-all delay-20 duration-500 open:shadow-lg md:hover:scale-102"
>
  <summary class="flex flex-row content-center justify-between gap-3 p-4">
    <p
      class="mt-1 size-[29px] rounded-full border text-center text-xs/7 text-gray-300 group-open:bg-orange-200 group-open:text-sky-950 group-hover:text-sky-950"
    >
      {index + 1}
    </p>
    <h1
      id={`alias-${publicKey}`}
      title="alias"
      class="baseline mt-1 grow truncate text-base/7 text-zinc-700 saturate-10 group-open:text-sky-950 group-open:saturate-100 group-hover:text-sky-950 group-hover:saturate-100"
    >
      {alias}
    </h1>
    <p
      class="mr-4 text-zinc-300 opacity-0 transition-opacity delay-700 duration-500 group-hover:opacity-100 group-open:group-hover:opacity-0"
    >
      click me
    </p>
    <div class="text-gray-600">
      <div class="text-right" title="channels">{channels}</div>
      <div class="text-right text-xs opacity-0 transition duration-500 group-hover:opacity-100">
        channels
      </div>
    </div>
  </summary>
  <div
    class="max-h-px overflow-hidden px-4 transition delay-700 duration-700 group-open:max-h-[1000px]"
  >
    <div class="flex gap-2">
      <h2
        title="public key"
        class="text-align-right truncate text-left align-baseline text-xs text-slate-500"
      >
        {publicKey}
      </h2>
      <div class="text-xs font-bold text-nowrap text-gray-600" title="capacity: {capacity} sats">
        {displayCapacity(capacity)} BTC
      </div>
    </div>
    <table class="mt-2 mb-4 w-full">
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
  </div>
</details>

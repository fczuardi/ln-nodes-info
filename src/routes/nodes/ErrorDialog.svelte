<script lang="ts">
  let { title, message } = $props();
</script>

<div class="m-auto mb-8 w-1/4 rounded-md bg-white p-8 text-center">
  <h2 class="font-bold">{title}</h2>
  <p>{message}</p>
</div>

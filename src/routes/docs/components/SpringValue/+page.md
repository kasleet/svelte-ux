---
name: $name
sourceUrl: $sourceUrl
docUrl: $docUrl
---

<script>
  import api from '$lib/components/SpringValue.svelte?raw&sveld';
  import ApiDocs from '$lib/components/ApiDocs.svelte';

  import AppBar from '$lib/components/AppBar.svelte';
  import Button from '$lib/components/Button.svelte';
  import Preview from '$lib/components/Preview.svelte';
  import SpringValue from '$lib/components/SpringValue.svelte';
  import { formatNumberAsStyle } from '$lib/utils/number';

  let value = 0;

  function update() {
    value = Math.random() * 10;
  }
</script>

# Examples

<Button class="bg-blue-500 hover:bg-blue-600 text-white" on:click={update}>Update value</Button>
<Button on:click={() => value = null}>Set null</Button>

## Basic

<Preview>
  <SpringValue {value} />
</Preview>

## Formatted

<Preview>
  <SpringValue {value} let:value>
    {formatNumberAsStyle(value, 'currency')}
  </SpringValue>
</Preview>

## Options

<Preview>
  <SpringValue {value} options={{ stiffness: 0.01, damping: 0.25 }} let:value>
    {formatNumberAsStyle(value, 'decimal')}
  </SpringValue>
</Preview>

## Disabled

<Preview>
  <SpringValue {value} disabled />
</Preview>

# API

<ApiDocs {api} />
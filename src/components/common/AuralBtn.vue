<template>
  <button class="border border-grey py-1 px-2 rounded shadow-3d-sm" type="button" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AuralBtn'
}
</script>

<style>

</style>

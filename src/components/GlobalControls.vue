<template>
  <section class="global-controls bg-grey bg-green-lighter rounded-lg py-2 px-2 flex shadow-3d">
    <aural-btn class="mr-3">Play</aural-btn>

    <bpm-slider />
  </section>
</template>

<script>
import BpmSlider from '@/components/BpmSlider'

export default {
  name: 'GlobalControls',
  components: {
    BpmSlider
  }
}
</script>

<style>

</style>

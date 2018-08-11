<template>
  <div id="app" class="container mx-auto">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$store.dispatch('audio/loadVoice', {
      path: 'https://surikov.github.io/webaudiofontdata/sound/0041_SoundBlasterOld_sf2.js',
      name: '_tone_0041_SoundBlasterOld_sf2'
    }).then(() => this.$store.dispatch('sequencer/start'))
  }
}
</script>

<style lang="scss">
</style>

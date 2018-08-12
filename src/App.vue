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
    }).then(() => {
      this.$store.dispatch('sequencer/start')
      this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'C-4' })
      this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'D-4' })
      this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'E-4' })
      this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'F-4' })
      this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'G-4' })
      this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'A-5' })
      this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'B-5' })
      this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'C-5' })
    })
  }
}
</script>

<style lang="scss">
</style>

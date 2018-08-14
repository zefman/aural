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
      this.$store.dispatch('sequencer/addSequencer', {defaultVoice: '_tone_0041_SoundBlasterOld_sf2'})
        .then(sequencer => {
          this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'C-4', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'D-4', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'E-4', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'F-4', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'G-4', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'A-5', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'B-5', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: '_tone_0041_SoundBlasterOld_sf2', defaultNote: 'C-5', sequencer })
        })
    })
  }
}
</script>

<style lang="scss">
</style>

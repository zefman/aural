<template>
  <div id="app" class="container mx-auto">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('audio/loadVoice', { voice: this.voices[0] }).then(() => {
      this.$store.dispatch('sequencer/start')
      this.$store.dispatch('sequencer/addSequencer', {defaultVoice: this.voices[0]})
        .then(sequencer => {
          this.$store.commit('sequencer/addTrack', { voice: this.voices[0], defaultNote: 'C-4', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: this.voices[0], defaultNote: 'D-4', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: this.voices[0], defaultNote: 'E-4', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: this.voices[0], defaultNote: 'F-4', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: this.voices[0], defaultNote: 'G-4', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: this.voices[0], defaultNote: 'A-4', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: this.voices[0], defaultNote: 'B-4', sequencer })
          this.$store.commit('sequencer/addTrack', { voice: this.voices[0], defaultNote: 'C-5', sequencer })
        })
    })
  },
  computed: {
    voices () {
      return this.$store.state.audio.voices
    }
  }
}
</script>

<style lang="scss">
</style>

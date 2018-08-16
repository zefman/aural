<template>
  <div>
    <aural-btn @click="newSequencer">New sequencer</aural-btn>
  </div>
</template>

<script>
export default {
  name: 'NewSequencer',
  methods: {
    newSequencer () {
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
    }
  },
  computed: {
    voices () {
      return this.$store.state.audio.voices
    }
  }
}
</script>

<style>

</style>

<template>
  <section class="sequencer bg-grey-lighter p-4 rounded-lg shadow-3d border border-grey">
    <sequencer-track v-for="(track, key) in tracks" :key="key" :track="track" />
  </section>
</template>

<script>
import SequencerTrack from '@/components/SequencerTrack'

export default {
  name: 'Sequencer',
  components: {
    SequencerTrack
  },
  props: ['sequencer'],
  computed: {
    tracks () {
      return this.sequencer.tracks.map((id) => this.$store.state.sequencer.tracks[id])
    }
  }
}
</script>

<style>

</style>

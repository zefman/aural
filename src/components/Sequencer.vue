<template>
  <section class="sequencer overflow-hidden rounded-lg shadow-3d border border-grey">
    <div class="p-4 bg-grey-lighter border-b border-grey">
      <h4>{{ sequencer.defaultVoice.title }}</h4>
    </div>

    <div class="p-2 bg-white">
      <sequencer-track v-for="(track, key) in tracks" :key="key" :track="track" />
    </div>

    <sequencer-edit :sequencer="sequencer"/>
  </section>
</template>

<script>
import SequencerTrack from '@/components/SequencerTrack'
import SequencerEdit from '@/components/SequencerEdit'

export default {
  name: 'Sequencer',
  components: {
    SequencerTrack,
    SequencerEdit
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

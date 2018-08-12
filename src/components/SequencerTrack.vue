<template>
  <div class="track">
    <input type="text" v-model="track.defaultNote">

    <div class="flex">
      <track-note v-for="n in numberOfNotes" :key="n" :track="track" :noteNumber="n" :active="n === currentNote" />
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import TrackNote from '@/components/TrackNote.vue'

export default {
  name: 'SequencerTrack',
  components: {
    TrackNote
  },
  props: {
    track: Object
  },
  computed: {
    ...mapState({
      currentNote: state => state.sequencer.currentNote,
      numberOfNotes: state => state.sequencer.numberOfNotes
    })
  }
}
</script>

<template>
  <div class="home">
    <sequencer-track v-for="(track, key) in tracks" :key="'track' + key" :track="track" />

    <add-sequencer-track />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SequencerTrack from '@/components/SequencerTrack.vue'
import AddSequencerTrack from '@/components/AddSequencerTrack.vue'

export default {
  name: 'home',
  components: {
    AddSequencerTrack,
    SequencerTrack
  },
  data () {
    return {
      currentNote: 0,
      notes: [false, false, false, false, false, false, false, false]
    }
  },
  computed: {
    ...mapState({
      tracks: state => state.sequencer.tracks
    })
  }
}
</script>

<style lang="scss" scoped>
.active {
  box-shadow: 0px 0px 10px 0px red;
}
</style>

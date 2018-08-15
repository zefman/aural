<template>
  <section class="sequencer overflow-hidden rounded-lg shadow-3d border border-grey">
    <div class="p-4 bg-grey-lighter border-b border-grey">
      <h4 @click="edit = true">{{ sequencer.defaultVoice.title }}</h4>
    </div>

    <div class="p-2 bg-white">
      <sequencer-track v-for="(track, key) in tracks" :key="key" :track="track" />
    </div>

    <sequencer-edit :sequencer="sequencer" @update="update" v-if="edit"/>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import SequencerTrack from '@/components/SequencerTrack'
import SequencerEdit from '@/components/SequencerEdit'
const { mapActions } = createNamespacedHelpers('sequencer')

export default {
  name: 'Sequencer',
  components: {
    SequencerTrack,
    SequencerEdit
  },
  props: ['sequencer'],
  data () {
    return {
      edit: false
    }
  },
  computed: {
    tracks () {
      return this.sequencer.tracks.map((id) => this.$store.state.sequencer.tracks[id])
    }
  },
  methods: {
    ...mapActions(['updateSequencer']),
    update (updatedSequencer) {
      this.updateSequencer({sequencer: updatedSequencer})
      this.edit = false
    }
  }
}
</script>

<style>

</style>

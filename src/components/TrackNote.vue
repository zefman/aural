<template>
  <div class="track-note" :class="{ active: active, enabled: note }" @click="toggle()"></div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapMutations } = createNamespacedHelpers('sequencer')

export default {
  name: 'TrackNote',
  props: {
    track: Object,
    noteNumber: Number,
    active: Boolean
  },
  computed: {
    note () {
      return this.track.notes[this.noteNumber]
    }
  },
  methods: {
    ...mapMutations([
      'setTrackNote'
    ]),
    toggle () {
      if (!this.note) {
        this.setTrackNote({
          track: this.track,
          noteNumber: this.noteNumber,
          note: this.track.defaultNote
        })
      } else {
        this.setTrackNote({
          track: this.track,
          noteNumber: this.noteNumber,
          note: false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.track-note {
  width: 15px;
  height: 15px;
  border: 1px solid black;
  margin-left: 2px;
  margin-right: 2px;
}
.active {
  box-shadow: 0px 0px 10px 0px red;
}
.enabled {
  background-color: aquamarine;
}
</style>

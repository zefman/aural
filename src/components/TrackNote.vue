<template>
  <div class="track-note border border-grey rounded-sm" :class="{ active: active, enabled: note }" @click="toggle()"></div>
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
  margin: 2px;
  transition: box-shadow 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.active {
  box-shadow: 0px 0px 10px 0px red;
  // transform: scale(1.2);
}

.enabled {
  background-color: aquamarine;
}

.track-note:hover {
  background-color: chartreuse;
}

</style>

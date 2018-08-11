<template>
  <div>
    <input type="text" v-model="defaultNote">
    <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" @click="add()">Add track</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapMutations } = createNamespacedHelpers('sequencer')

export default {
  name: 'AddSequencerTrack',
  data () {
    return {
      defaultNote: 'C-4'
    }
  },
  methods: {
    ...mapMutations([
      'addTrack'
    ]),
    add () {
      console.log('Add')
      this.addTrack({
        voice: '_tone_0041_SoundBlasterOld_sf2',
        defaultNote: this.defaultNote
      })
    }
  }
}
</script>

<style>

</style>

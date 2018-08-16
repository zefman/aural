<template>
  <div class="modal flex items-center justify-center fixed pin" @click="close">
    <div class="sequencer-edit border border-grey rounded-lg overflow-hidden shadow-lg">
      <div class="bg-grey-lighter p-3  border-b border-grey-light">
        <h4>Edit Sequencer</h4>
      </div>
      <div class="bg-white p-3" v-if="!loading">
        <select name="voice" id="voice" v-model="voice" class="block width-full mb-4" @change="loadVoice">
          <option v-for="voice in voices" :key="voice.name" v-bind:value="voice">{{ voice.title }}</option>
        </select>

        <!-- <button class="border border-grey py-1 px-2 rounded shadow-3d-sm" @click="update">Update</button> -->
        <aural-btn @click="update">Update</aural-btn>
      </div>
      <div v-else class="text-center p-3">
        <p>Loading..</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SequencerEdit',
  props: ['sequencer'],
  data () {
    return {
      voice: null,
      loading: false
    }
  },
  computed: {
    voices () {
      return this.$store.state.audio.voices
    }
  },
  methods: {
    loadVoice ($event, test) {
      this.loading = true
      this.$store.dispatch('audio/loadVoice', { voice: Object.assign({}, this.voice) })
        .then(() => {
          this.loading = false
        })
    },
    update () {
      const updatedSequencer = Object.assign({}, this.sequencer, {defaultVoice: this.voice})
      this.$emit('update', updatedSequencer)
    },
    close () {
      this.$emit('close')
    }
  },
  created () {
    this.voice = this.sequencer.defaultVoice
  }
}
</script>

<style scoped lang="scss">

</style>

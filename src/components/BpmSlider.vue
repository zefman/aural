<template>
  <div class="bpm-slider">
    <label for="bpm">Bpm: {{ bpm }}</label>
    <input name="bpm" type="range" min="20" max="300" v-model="bpm">
  </div>
</template>

<script>
export default {
  name: 'BpmSlider',
  computed: {
    bpm: {
      get () {
        return this.$store.state.sequencer.bpm
      },
      set (bpm) {
        this.$store.commit('sequencer/setBpm', bpm)
      }
    }
  },
  created () {
    // console.log(this.$store)
  }
}
</script>

<style lang="scss" scoped>
.bpm-slider {
  text-align: center;
}

label {
  display: block;
}

input {
  display: block;
}
</style>

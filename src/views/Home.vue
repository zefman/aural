<template>
  <div class="home">
    <input
      v-for="(note, index) in notes"
      :key="index"
      v-model="notes[index]"
      :class="{ active: index === currentNote }"
      type="checkbox">
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      currentNote: 0,
      notes: [false, false, false, false, false, false, false, false]
    }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.active {
  box-shadow: 0px 0px 10px 0px red;
}
</style>

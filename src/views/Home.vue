<template>
  <div class="home py-4">
    <h1 class="font-heading font-bold text-2xl mb-4">Aural - <span class="text-grey">Fun with sequencers</span></h1>

    <sequencer v-for="(sequencer, key) in sequencers" :key="key" :sequencer="sequencer" />

  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sequencer from '@/components/Sequencer'

export default {
  name: 'home',
  components: {
    Sequencer
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      sequencers: state => state.sequencer.sequencers
    })
  }
}
</script>

<style lang="scss" scoped>
.active {
  box-shadow: 0px 0px 10px 0px red;
}
</style>

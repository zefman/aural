<template>
  <div class="home py-4">
    <header class="flex items-center">
      <div class="w-1/2">
        <h1 class="font-heading font-bold text-2xl mb-4">Aural - <span class="text-grey">Fun with sequencers</span></h1>
      </div>
      <div class="w-1/2 flex justify-end">
        <global-controls />
      </div>
    </header>

    <div class="flex">
      <sequencer v-for="(sequencer, key) in sequencers" :key="key" :sequencer="sequencer" />
      <new-sequencer />
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sequencer from '@/components/Sequencer'
import NewSequencer from '@/components/NewSequencer'
import GlobalControls from '@/components/GlobalControls'

export default {
  name: 'home',
  components: {
    Sequencer,
    NewSequencer,
    GlobalControls
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

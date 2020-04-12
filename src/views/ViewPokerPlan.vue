<template lang="pug">
  .Container
    StoryList
    ActiveStory(v-if="this.activeStory.StoryId")
    ScrumMasterPanel(v-if="isViewAsScrumMaster && this.activeStory.StoryId")
</template>

<script>

import StoryList from '@/components/StoryList'
import ActiveStory from '@/components/ActiveStory'
import ScrumMasterPanel from '@/components/ScrumMasterPanel'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ViewPokerPlan',
  components: {
    StoryList,
    ActiveStory,
    ScrumMasterPanel
  },
  computed: {
    ...mapGetters([
      'activeStory'
    ]),
    isViewAsScrumMaster () {
      return this.$route.name === 'ViewAsScrumMaster'
    }
  },
  methods: {
    ...mapActions([
      'resetActiveStory'
    ])
  },
  created () {
    this.resetActiveStory()
  }
}
</script>

<style lang="scss" scoped>
  .Container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-column-gap: 25px;
    padding: 0 100px;
  }
</style>

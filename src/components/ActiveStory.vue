<template lang="pug">
  Panel(panelTitle="Active Story", :headerTitle="activeStory.StoryName")
    .Active-story
      button.Button.Button-sm(
        v-for="point in possibleStoryPoints",
        :key="point",
        :class="[{ 'Button--disabled': hasDisabled || !activeStory.StoryName }, { 'Button--success': isSelected[point] && isVoted }]"
        @click="voteStoryPoint(point)") {{ point }}
    .Active-story-title {{ infoText }}
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ActiveStory',
  data () {
    return {
      activeStory: {
        StoryName: '',
        StoryPoint: null,
        StoryId: '',
        Votes: []
      },
      possibleStoryPoints: [
        1, 2, 3, 5,
        8, 13, 21, 34,
        55, 89, 134
      ],
      isSelected: {},
      isVoted: false
    }
  },
  computed: {
    ...mapGetters([
      'session'
    ]),
    isViewAsScrumMaster () {
      return this.$route.name === 'ViewAsScrumMaster'
    },
    hasDisabled () {
      return ((this.hasFromScrumMasterVoted && this.isViewAsScrumMaster) || (this.hasFromDeveloperVoted && !this.isViewAsScrumMaster && this.isVoted) || this.hasAllTeamVoted)
    },
    hasFromScrumMasterVoted () {
      if (!this.activeStory.StoryId) return false
      return !!this.activeStory.Votes.find(voter => voter.FromWho === 1)
    },
    hasFromDeveloperVoted () {
      if (!this.activeStory.StoryId) return false
      return !!this.activeStory.Votes.find(voter => voter.FromWho === 0)
    },
    hasAllTeamVoted () {
      if (!this.activeStory.StoryId) return false
      return this.activeStory.Votes.length === Number(this.session.NumberOfVoters) + 1
    },
    infoText () {
      if (this.hasAllTeamVoted) return 'All team has voted !!'
      if ((this.hasFromScrumMasterVoted && this.isViewAsScrumMaster) || (this.hasFromDeveloperVoted && !this.isViewAsScrumMaster && this.isVoted)) return 'You Voted !!'
      return 'Please Vote !!'
    },
    storyIndex () {
      if (!this.activeStory.StoryId) return false
      return this.session.StoryList.findIndex(
        _ => _.StoryId === this.activeStory.StoryId
      )
    }
  },
  methods: {
    ...mapActions([
      'applyStoryPoint'
    ]),
    voteStoryPoint (point) {
      this.$set(
        this.isSelected,
        point,
        !this.isSelected[point]
      )

      this.isVoted = true

      const payload = {
        FromWho: this.isViewAsScrumMaster ? 1 : 0,
        Point: point
      }

      this.applyStoryPoint([
        payload,
        this.storyIndex
      ])
    }
  },
  watch: {
    storyIndex () {
      this.isSelected = {}
    }
  },
  created () {
    this.isVoted = false
    this.activeStory = JSON.parse(localStorage.getItem('vuex')).activeStory
    this.fetchInterval = setInterval(() => {
      this.activeStory = JSON.parse(localStorage.getItem('vuex')).activeStory
    }, 2000)
  },
  mounted () {
    this.isVoted = false
  },
  destroyed () {
    clearInterval(this.fetchInterval)
  }
}
</script>

<style lang="scss" scoped>
  .Active-story {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-left: 25px;

    &-title {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      color: $black;
      @include theme-font-setting('md', 'regular');
    }
  }
</style>

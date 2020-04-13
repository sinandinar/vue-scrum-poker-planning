<template lang="pug">
  Panel(panelTitle="Scrum Master Panel", :headerTitle="headerTitle")
    .Info-wrapper
      .Info-content(v-for="index in Number(numberOfVoters) + 1" :key="index")
        .Info-title {{ voteFromWho(index) }}: {{ voteText(index) }}
    .Info-title(v-if="hasAllTeamVoted") Seems team has different votes
    .Info-title(v-if="hasAllTeamVoted") Please discuss and finalize the score below textbox
    Input(
      v-if="hasAllTeamVoted"
      v-model="finalScore",
      label="Final Score:",
      name="finalScore",
      type="number",
      min="1",
      placeHolder="Please enter final score")
    .Button-wrapper
      button.Button(
        @click="endVotingForStory"
        :class="{ 'Button--disabled': !hasAllTeamVoted }") End Voting For Story
      .Info-title(v-if="!hasAllTeamVoted") You can not end voting till each teammate voted

</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ScrumMasterPanel',
  data () {
    return {
      finalScore: null,
      fetchInterval: null,
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
      ]
    }
  },
  computed: {
    ...mapGetters([
      'session'
    ]),
    headerTitle () {
      return this.activeStory.StoryName ? this.activeStory.StoryName + ' is active' : ''
    },
    numberOfVoters () {
      return this.session.NumberOfVoters
    },
    hasAllTeamVoted () {
      if (!this.activeStory.StoryId) return false
      return this.activeStory.Votes.length === Number(this.session.NumberOfVoters) + 1
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
      'setFinalScore'
    ]),
    endVotingForStory () {
      const isFinalScore = !!this.possibleStoryPoints.find(_ => _ === Number(this.finalScore))
      if (!isFinalScore) {
        alert('The Final Score field must be one of the following. "1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 134"')
        return false
      }
      this.setFinalScore([
        Number(this.finalScore),
        this.storyIndex
      ])
      this.finalScore = null
    },
    voteFromWho (index) {
      if (this.activeStory.Votes.length === 0 && index === 1) return 'Scrum Master'
      if (index === 1) {
        return (this.activeStory.Votes[index - 1] || {}).FromWho === 1 ? 'Scrum Master' : `Voter ${index}`
      } else {
        return (this.activeStory.Votes[index - 1] || {}).FromWho === 1 ? 'Scrum Master' : `Voter ${index - 1}`
      }
    },
    voteText (index) {
      if ((this.activeStory.Votes[index - 1] || {}).Point) {
        return 'Voted'
      }
      return 'Not Voted'
    }
  },
  created () {
    this.activeStory = JSON.parse(localStorage.getItem('vuex')).activeStory
    this.fetchInterval = setInterval(() => {
      this.activeStory = JSON.parse(localStorage.getItem('vuex')).activeStory
    }, 2000)
  },
  destroyed () {
    clearInterval(this.fetchInterval)
  }
}
</script>

<style lang="scss" scoped>
  .Info {
    &-wrapper {
      margin-bottom: 40px;
    }
    &-title {
      color: $black;
      @include theme-font-setting('base', 'regular');
      margin-bottom: 5px;
    }
  }
  .Button {
    &-wrapper {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>

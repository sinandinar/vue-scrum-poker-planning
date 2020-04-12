<template lang="pug">
  .Table
    .Table-title Story List
    table.Table-content
      thead
        tr
          th(scope='col') Story
          th(scope='col') Story Point
          th(scope='col') Status
      tbody(v-for="(story, index) in storyList" :key="story.StoryId")
        tr(@click="setActiveStory(story, index)")
          td {{ story.StoryName }}
          td {{ story.StoryPoint || '-' }}
          td {{ storyStatus(story) }}
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'StoryList',
  computed: {
    ...mapGetters([
      'session'
    ]),
    storyList () {
      return this.session.StoryList
    }
  },
  methods: {
    ...mapActions([
      'applyActiveStory'
    ]),
    setActiveStory (story) {
      this.applyActiveStory(story)
    },
    isViewAsScrumMaster () {
      return this.$route.name === 'ViewAsScrumMaster'
    },
    storyStatus (story, index) {
      return story.Votes.length === 0 ? 'Not Voted' : 'Voted'
    }
  }
}
</script>

<style lang="scss" scoped>
  .Table {
    &-title {
      color: $black;
      @include theme-font-setting('md', 'regular');
      margin-bottom: 10px;
    }

    &-content {
      border: 1px solid $border-color;
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
    }

    &-content thead th {
      border: 1px solid $border-color;
      color: $black;
      padding: 10px;
      text-align: left;
      text-shadow: 1px 1px 1px $white;
    }

    &-content tbody {
      &:hover {
        background-color: $swans-down;
      }
    }

    &-content tbody td {
      border: 1px solid $border-color;
      color: $black;
      padding: 10px;
      text-shadow: 1px 1px 1px $white;
      cursor: pointer;
    }
  }
</style>

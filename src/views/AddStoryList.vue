<template lang="pug">
  .StoryList
    .StoryList-wrapper

      InputGroup(flow="column")
        Input(
          v-model="form.SessionName",
          label="Session Name:",
          name="sessionName",
          placeHolder="Please enter session name")
        Input(
          v-model="form.NumberOfVoters",
          label="Number of Voters:",
          name="numberOfVoters",
          placeHolder="Please enter number of voters")

      InputGroup(label="Paste your story List (Each line will be converted as a story)")
        Input(
          v-model="form.StoryList",
          inputType="textarea",
          rows="20",
          name="storyList",
          placeHolder="Please enter story list")

</template>

<script>

export default {
  name: 'AddStoryList',
  data () {
    return {
      form: {
        SessionName: '',
        NumberOfVoters: '',
        StoryList: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .StoryList{
    &-wrapper{
      width: 1000px;
      margin: 0 auto;
    }
  }
</style>

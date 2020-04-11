<template lang="pug">
  .StoryList
    .StoryList-wrapper
      .Error(v-if="errorMessages.length" v-for="(error, index) in errorMessages" :key="index")
        ul
          li {{ error }}
        svg.Error-btn(@click="removeError(index)") #[use(xlink:href="#icon-close")]

      InputGroup(flow="column" style="margin-top: 25px")
        Input(
          v-model="form.SessionName",
          label="Session Name:",
          name="sessionName",
          placeHolder="Please enter session name",
          maxlength="200")
        Input(
          v-model="form.NumberOfVoters",
          label="Number of Voters:",
          name="numberOfVoters",
          placeHolder="Please enter number of voters",
          type="number")

      InputGroup(label="Paste your story List (Each line will be converted as a story)")
        Input(
          v-model="form.StoryList",
          inputType="textarea",
          rows="20",
          name="storyList",
          placeHolder="Please enter story list")

      .Button-wrapper
        button.Button(@click="startSession") Start Session

</template>

<script>

export default {
  name: 'AddStoryList',
  data () {
    return {
      errorMessages: [],
      form: {
        SessionName: '',
        NumberOfVoters: '',
        StoryList: ''
      }
    }
  },
  methods: {
    startSession () {
      this.validate()

      const storyList = this.form.StoryList
        .split('\n')
        .map(_ => _.trim())
        .filter(Boolean)
        .map(_ => ({ storyName: _ }))

      console.log(storyList)
    },
    validate () {
      this.errorMessages = []

      if (this.form.SessionName.trim() === '') {
        this.errorMessages.push('Session name field is required!')
      }

      if (this.form.SessionName.trim().length > 200) {
        this.errorMessages.push('Session name field may not be greater than 200 characters.')
      }

      if (!/^[1-9]\d*$/.exec(this.form.NumberOfVoters)) {
        this.errorMessages.push('Number of Voters field must greater than 0.')
      }

      if (this.form.StoryList.trim() === '') {
        this.errorMessages.push('Story List field is required!')
      }
    },
    removeError (index) {
      this.errorMessages.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .StoryList {
    &-wrapper {
      width: 1000px;
      margin: 0 auto;
    }
  }
  .Button {
    &-wrapper {
      display: flex;
      justify-content: flex-end;
    }
  }
  .Error {
    background: $danger;
    color: $white;
    margin-top: 6px;
    padding: 3px;
    border-radius: 3px;
    position: relative;

    &-btn {
      position: absolute;
      width: 24px;
      height: 24px;
      right: 15px;
      top: 15px;
      cursor: pointer;
      fill: $white;
    }
  }
</style>

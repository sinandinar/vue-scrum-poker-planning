<template lang="pug">
  header.Header
    span
      router-link(to="/") Scrum Poker Planning
    span(v-if="isViewAsScrumMaster") Please share link of developers panel to the teammates:
      router-link.Header-link(:to="{ name: 'ViewAsDeveloper', params: { sessionId: sessionId } }" :class="{ 'router-link-active': isViewAsScrumMaster }") {{ `poker-planning-view-as-developer/${sessionId}` }}
</template>

<script>
export default {
  name: 'Header',
  computed: {
    sessionId () {
      return this.$route.params.sessionId
    },
    isViewAsScrumMaster () {
      return this.$route.name === 'ViewAsScrumMaster'
    }
  }
}
</script>

<style lang="scss" scoped>
  header.Header {
    height: 100px;
    background: $flamingo;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;

    a {
      color: $white;
      @include theme-font-setting('xl', 'medium');
    }
  }
  .Header-link {
    &.router-link-active {
      text-decoration: underline;
      color: $whisper;
      @include theme-font-setting('base', 'regular');
    }

    &:hover {
      text-decoration: none;
      color: $white;
      transition: all 0.4s cubic-bezier(0.56, 1.19, 0.2, 1.05);
    }
  }
</style>

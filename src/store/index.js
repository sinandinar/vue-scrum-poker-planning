import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersistence({
  key: 'vuex',
  storage: localStorage
})

export default new Vuex.Store({
  state: {
    session: {
      SessionName: '',
      NumberOfVoters: '',
      StoryList: [],
      SessionId: ''
    },
    activeStory: {
      StoryName: '',
      StoryPoint: null,
      StoryId: '',
      Votes: []
    }
  },
  getters: {
    session: state => state.session,
    storyList: state => state.session.StoryList,
    activeStory: state => state.activeStory
  },
  mutations: {
    SET_SESSION (state, session) {
      state.session = session
    },
    SET_ACTIVE_STORY (state, activeStory) {
      state.activeStory = activeStory
    },
    RESET_ACTIVE_STORY (state) {
      state.activeStory = {
        StoryName: '',
        StoryPoint: null,
        StoryId: '',
        Votes: []
      }
    },
    SET_STORY_POINT (state, [payload, index]) {
      state.session.StoryList[index].Votes.push(payload)
      state.activeStory.Votes.push(payload)
    },
    SET_FINAL_SCORE (state, [finalScore, index]) {
      state.session.StoryList[index].StoryPoint = finalScore
      state.activeStory.StoryPoint = finalScore
    }
  },
  actions: {
    setSession ({ commit }, session) {
      commit('SET_SESSION', session)
    },
    applyActiveStory ({ commit }, activeStory) {
      commit('SET_ACTIVE_STORY', activeStory)
    },
    resetActiveStory ({ commit }) {
      commit('RESET_ACTIVE_STORY')
    },
    applyStoryPoint ({ commit }, [payload, index]) {
      commit('SET_STORY_POINT', [payload, index])
    },
    setFinalScore ({ commit }, [finalScore, index]) {
      commit('SET_FINAL_SCORE', [finalScore, index])
    }
  },
  plugins: [vuexLocalStorage.plugin]
})

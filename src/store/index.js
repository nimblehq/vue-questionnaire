import Vue from 'vue'
import Vuex from 'vuex'
import questionnaire from './modules/questionnaire'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    questionnaire
  }
})

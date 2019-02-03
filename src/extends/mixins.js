import Vue from 'vue'
import logic from '@/store'

Vue.mixin({
  beforeRouteLeave (to, from, next) {
    if (logic.state.common.popup.length) {
      logic.commit('common/CLEAR_POPUP')
    } else {
      next()
    }
  }
})

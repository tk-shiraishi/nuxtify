export const state = () => ({
  isCollapse: true
})

export const mutations = {
  toggleCollapse (state) {
    state.isCollapse = !state.isCollapse
  }
}

export const actions = {
  toggleCollapse ({ commit }) {
    return commit('toggleCollapse')
  }
}

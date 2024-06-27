import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos(state, todos) {
      state.todos = todos
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})

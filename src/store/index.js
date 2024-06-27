import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos(state, todos) {
      state.todos = todos
    },

    storeTodo(state, todo) {
      state.todos.push(todo)
    }
  },
  getters: {
  },
  actions: {
    async getTodos(context) {
      const todos = await axios.get('http://localhost:3000/todos');
  
      context.commit('storeTodos', todos.data)

      return todos;
    },
    
    async addTodo(context, {title, completed}) {
      const { data } = await axios.post('http://localhost:3000/todos', { title, completed })

      context.commit('storeTodo', data);
    }
  },
  modules: {
  }
})

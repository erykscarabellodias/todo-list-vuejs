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
      const index = state.todos.findIndex(t => t.id === todo.id)

      if(index >= 0) {
        state.todos.splice(index, 1, todo)
      } else {
        state.todos.push(todo)
      }
    },

    deleteTodo(state, id) {
      const index = state.todos.findIndex(t => t.id === id)

      state.todos.splice(index, 1)
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
    },

    async updateTodo(context, {id, title, completed}) {
      const {data} = await axios.put(`http://localhost:3000/todos/${id}`, { title, completed })

      context.commit('storeTodo', data);
    },

    async deleteTodo(context, id) {
      await axios.delete(`http://localhost:3000/todos/${id}`)

      this.commit('deleteTodo', id)
    }
  },
  modules: {
  }
})

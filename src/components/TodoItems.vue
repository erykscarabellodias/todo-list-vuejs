<template>
  <div class="space-y-2">
    <TodoItem :key="todo.id" v-for="todo in $store.state.todos" :todo="todo" />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  components: { TodoItem }
}
</script>
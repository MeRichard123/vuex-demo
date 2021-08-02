<template>
<div>
  <h1>Hello VueX</h1>
  <p>Name from VueX: {{name}}</p>
  <hr/>
  <AddTodoForm/>
  <h2>All Todos</h2>
  <ul>
    <li v-for="item in allTodos" :key="item.id">
      <p v-if="item.done" class="done">{{item.text}}</p>
      <p v-else>{{item.text}}</p>
      <button @click="removeTodo(item.id)">Remove</button>
      <button @click="toggleDone(item.id)">Done</button>
    </li>
  </ul>
</div>
</template>

<script>
import AddTodoForm from './AddTodoForm.vue';

export default {
  name: 'Todo List',
  components: {
    AddTodoForm,
  },
  data() {
    return {
      doneTodos: this.$store.getters.doneTodos,
      allTodos: this.$store.state.todos,
    };
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
  },
  methods: {
    removeTodo(id) {
      this.$store.dispatch('toggleRemoveAction', {
        id,
      });
    },
    toggleDone(id) {
      console.log('Toggling');
      this.$store.dispatch('toggleDoneAction', {
        id,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  padding: 10px 50px;
  border: 2px solid #2c3e50;
  cursor: pointer;
}
.done{
  text-decoration: line-through;
}
</style>

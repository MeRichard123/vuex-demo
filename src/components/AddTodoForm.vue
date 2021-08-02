<template>
   <form @submit.prevent="addTodo">
       <input type="text" v-model="newTodo.text"/>
       <input type="submit" value="Add Todo">
   </form>
</template>

<script>
// import { mapActions } from 'vuex';

export default {
  name: 'AddTodoForm',
  data() {
    return {
      newTodo: {
        id: this.$store.getters.newId,
        text: '',
        done: false,
      },
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch('addTodoAction', {
        newTodo: this.newTodo,
      });
      this.newTodo = {
        id: this.$store.getters.newId,
        text: '',
        done: false,
      };
    },
  },
};
</script>

<style scoped>

</style>

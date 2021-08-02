import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';
import { ADD_TODO, REMOVE_TODO, TOGGLE_DONE } from './mutation-types';

// Store is injected into components this.$store

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage,
});

export default createStore({
  plugins: [vuexPersist.plugin],
  state: {
    // State stores the data
    name: 'Richard',
    count: 0,
    todos: [
      { id: 1, text: 'Learn VueX', done: false },
      { id: 2, text: 'Learn Vue Router', done: false },
      { id: 3, text: 'Write Code', done: true },

    ],
  },
  getters: {
    // Computed Properties for state slices
    newId: (state) => state.todos.slice(-1)[0].id + 1,
  },
  mutations: {
    // Mutations update state, you can't directly call these they are more like registered events
    [ADD_TODO](state, payload) {
      state.todos.push(payload.newTodo);
    },
    [REMOVE_TODO](state, payload) {
      const index = state.todos.map((item) => item.id).indexOf(payload.id);
      state.todos.splice(index, 1);
    },
    [TOGGLE_DONE](state, payload) {
      const todo = state.todos.find((todo_) => todo_.id === payload.id);
      Object.assign(todo, { ...todo, done: true });
    },
  },
  actions: {
    // Actions commit mutations and can contain async code
    // Actions need to be dispatched by components.
    addTodoAction(context, payload) {
      context.commit(ADD_TODO, payload);
    },
    toggleDoneAction(context, payload) {
      context.commit(TOGGLE_DONE, payload);
    },
    toggleRemoveAction(context, payload) {
      context.commit(REMOVE_TODO, payload);
    },
  },
  modules: {
    // https://vuex.vuejs.org/guide/modules.html
    // Modules are separate bits of state with actions, state, mutations and getters
    // Modules can be namespaced.
  },
});

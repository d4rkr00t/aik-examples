import Vue from 'vue/dist/vue.js';
import 'todomvc-app-css/index.css';
import todoStorage from './store';

export default function createApp(root) {
  const filters = {
    all(todos) {
      return todos;
    },

    active(todos) {
      return todos.filter(todo => !todo.completed);
    },

    completed(todos) {
      return todos.filter(todo => todo.completed);
    }
  };

  return new Vue({
    // the root element that will be compiled
    el: root,

    // app initial state
    data: {
      todos: todoStorage.fetch(),
      newTodo: '',
      editedTodo: null,
      visibility: 'all'
    },

    // watch todos change for localStorage persistence
    watch: {
      todos: {
        deep: true,
        handler: todoStorage.save
      }
    },

    // computed properties
    // http://vuejs.org/guide/computed.html
    computed: {
      filteredTodos() {
        return filters[this.visibility](this.todos);
      },

      remaining() {
        return filters.active(this.todos).length;
      },

      allDone: {
        get() {
          return this.remaining === 0;
        },

        set(value) {
          this.todos.forEach(todo => {
            todo.completed = value;
          });
        }
      }
    },

    // methods that implement data logic.
    // note there's no DOM manipulation here at all.
    methods: {

      addTodo() {
        const value = this.newTodo && this.newTodo.trim();

        if (!value) return;

        this.todos.push({
          title: value,
          completed: false
        });

        this.newTodo = '';
      },

      removeTodo(todo) {
        this.todos.$remove(todo);
      },

      editTodo(todo) {
        this.beforeEditCache = todo.title;
        this.editedTodo = todo;
      },

      doneEdit(todo) {
        if (!this.editedTodo) return;

        this.editedTodo = null;
        todo.title = todo.title.trim();

        if (!todo.title) {
          this.removeTodo(todo);
        }
      },

      cancelEdit(todo) {
        this.editedTodo = null;
        todo.title = this.beforeEditCache;
      },

      removeCompleted() {
        this.todos = filters.active(this.todos);
      }
    },

    filters: {
      pluralize() {
        console.log(arguments);
      }
    },

    // a custom directive to wait for the DOM to be updated
    // before focusing on the input field.
    // http://vuejs.org/guide/custom-directive.html
    directives: {
      'todo-focus'(el) {
        if (!el.value) return;
        Vue.nextTick(() => el.focus());
      }
    }
  });
}

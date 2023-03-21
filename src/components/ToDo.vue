<script>
// give each todo a unique id
let id = 0;
import { BIconXSquareFill } from "bootstrap-icons-vue";

export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  components: {
    BIconXSquareFill,
  },
  mounted() {
    if (localStorage.storage) {
      let x = JSON.parse(localStorage.storage);
      console.log(x);
      x.forEach((element) => {
        this.todos.push(element);
      });
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo });
      this.newTodo = "";
      localStorage.storage = JSON.stringify(this.todos);
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
      localStorage.storage = JSON.stringify(this.todos);
    },
  },
};
</script>

<template>
  <form @submit.prevent="addTodo">
    <div class="input-group mt-3">
      <input class="form-control" v-model="newTodo" />
      <button class="btn btn-primary">Přidat</button>
    </div>
  </form>
  <div
    class="row"
    data-masonry='{"percentPosition":true,"itemSelector":".col-12"}'
  >
    <div v-for="todo in todos" :key="todo.id" class="col-12 col-sm-4 col-md-3">
      <BIconBatteryFull />
      <div class="card mb-3 mt-3">
        <div class="card-body">
          <p class="card-text">{{ todo.text }}</p>
          <a class="btn btn-danger  d-inline-flex" @click="removeTodo(todo)">
            <BIconXSquareFill />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  width: 100%;
}
</style>

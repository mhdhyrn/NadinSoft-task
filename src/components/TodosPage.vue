<template>
  <ShouldLogin v-if="!isLogin"></ShouldLogin>
  <div class="h-[100%] relative dark:bg-slate-700" v-else>
    <div class="text-center">
      <button
        class="p-5 bg-green-500 rounded-md text-white mt-10"
        @click="showAddTodoModal"
      >
        {{ this.$t("todosAddBtn") }}
      </button>
    </div>
    <div
      class="overflow-y-auto h-[80%] rounded-md flex flex-col items-center gap-5 mt-10 dark:text-white"
    >
      <div v-if="todos.length == 0">{{ $t("todosNoTodoTitle") }}</div>
      <div
        class="bg-slate-500 text-white flex items-center justify-between p-10 w-[90%] rounded-md h-20"
        v-else
        v-for="(todo, index) in todos"
        :key="index"
      >
        <div class="">
          <span>{{ todo.name }}</span>
        </div>
        <div class="w-[10%] flex justify-between">
          <button @click="deleteTodoHandler(index)">
            {{ $t("todosDeleteBtn") }}
          </button>
          <button @click="showEditTodoModal(index)">
            {{ $t("todosEditBtn") }}
          </button>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div
      v-if="isModalOpen"
      class="absolute inset-0 z-10 w-full h-full bg-slate-500 flex flex-col items-center p-10 dark:bg-slate-500"
    >
      <div class="w-full text-end mb-20">
        <button
          @click="closeModal"
          class="w-16 h-14 bg-rose-500 text-white rounded-md"
        >
          {{ $t("todosModalCloseBtn") }}
        </button>
      </div>
      <div class="w-2/3 h-2/3 bg-slate-50 rounded-md p-10 dark:bg-slate-700">
        <div class="text-center mt-10">
          <input
            maxlength="40"
            v-model="inputValue"
            type="text"
            :placeholder="$t('todosModalPlaceholderInput')"
            class="w-1/2 h-12 border-2 border-slate-500 rounded-md px-5"
          />
        </div>
        <div class="text-center mt-10">
          <button
            v-if="isEditModal"
            @click="editTodoHandler"
            class="w-20 h-14 bg-blue-500 rounded-md text-white"
          >
            {{ $t("todosModalEditBtn") }}
          </button>
          <button
            v-if="!isEditModal"
            @click="addTodoHandler"
            class="w-20 h-14 bg-blue-500 rounded-md text-white"
          >
            {{ $t("todosModalAddBtn") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from "../services/utils";
import ShouldLogin from "./ShouldLogin.vue";
export default {
  name: "TodosPage",
  data() {
    return {
      todos: [],
      isModalOpen: false,
      isEditModal: false,
      inputValue: "",
      selectedTodoIndex: 0,
      isLogin: utils(),
    };
  },
  components: {
    ShouldLogin,
  },
  methods: {
    showAddTodoModal() {
      this.inputValue = "";
      this.isEditModal = false;
      this.isModalOpen = true;
    },
    showEditTodoModal(index) {
      this.inputValue = this.todos[index].name;
      this.selectedTodoIndex = index;
      this.isEditModal = true;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    addTodoHandler() {
      if (
        this.inputValue.trim().length < 3 ||
        this.inputValue.trim().length > 40
      ) {
        alert("Todo name is too long or too short");
      } else {
        this.todos.push({ name: this.inputValue });
        localStorage.setItem("todos", JSON.stringify(this.todos));
        this.inputValue = "";
        this.closeModal();
      }
    },
    editTodoHandler() {
      let selectedTodo = this.todos[this.selectedTodoIndex];
      this.todos[this.selectedTodoIndex].name = this.inputValue;
      localStorage.setItem("todos", JSON.stringify(this.todos));
      this.closeModal();
    },
    deleteTodoHandler(index) {
      let selectedTodo = this.todos[index];
      let confirm = window.confirm(
        `Do you want do delete ${selectedTodo.name} todo?`
      );
      if (confirm) {
        this.todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },
  },
  beforeMount() {
    this.todos = JSON.parse(localStorage.getItem("todos"));
    this.todos === null ? (this.todos = []) : null;
  },
};
</script>
<style></style>

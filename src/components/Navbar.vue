<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-nav">
    <div class="container-fluid">
      <div class="navbar-collapse">
        <ul class="navbar-btn">
          <button-u-i @click="$router.push('/')">{{ nameBlog }}</button-u-i>
          <button-u-i data-toggle="modal" @click="showDialog">
            Добавить статью
          </button-u-i>
        </ul>
        <form class="form-inline">
          <input-u-i class="form-control mr-sm-2"
              :model-value="searchQuery"
              @update:model-value="setSearchQuery"
              placeholder="Поиск...."
              v-focus
          />
<!--          <select-u-i-->
<!--                :model-value="selectedSort"-->
<!--                @update:model-value="setSelectedSort"-->
<!--                :options="sortOptions"-->
<!--          />-->
        </form>
        <ul class="navbar-btn">
          <button-u-i v-for="navbar in navbars" :key="navbar.id" @click="$router.push(navbar.router)">
            {{ navbar.names }}
          </button-u-i>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Navbar -->
  <modal-u-i v-model:show="dialogVisible">
      <form  @create="createPost" />
  </modal-u-i>
</template>

<script>
import ButtonUI from "@/components/UI/Button";
import ModalUI from "@/components/UI/Modal";
import {mapMutations, mapState} from "vuex";
export default {
  name: "NavbarComponent",
  components: {ButtonUI, ModalUI},
  data: function () {
    return {
    nameBlog: "Это мой блог",
    navbars: [
      {names: "Регистрация", router: "/register"},
      {names: "Войти", router: "/login"}
    ],
    dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
        setSearchQuery: 'post/setSearchQuery',
        setSelectedSort: 'post/setSelectedSort',
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  computed: {
    ...mapState({
        selectedSort: state => state.post.selectedSort,
        searchQuery: state => state.post.searchQuery,
        sortOptions: state => state.post.sortOptions
    })
  }
}
</script>

<!--<style scoped>-->
<!--</style>-->
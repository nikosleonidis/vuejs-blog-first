<template>
  <div class="container">
<!--    <div class="nav-list">-->
<!--      <input-u-i-->
<!--          :model-value="searchQuery"-->
<!--          @update:model-value="setSearchQuery"-->
<!--          placeholder="Поиск...."-->
<!--          v-focus-->
<!--      />-->
<!--      <select-u-i-->
<!--            :model-value="selectedSort"-->
<!--            @update:model-value="setSelectedSort"-->
<!--            :options="sortOptions"-->
<!--      />-->
<!--    </div>-->
    <modal-u-i v-model:show="dialogVisible">
      <form  @create="createPost" />
    </modal-u-i>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{ 'current-page': page === pageNumber }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
export default {
  name: "HomePage",
  components: {PostList},
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      // setSearchQuery: 'post/setSearchQuery',
      // setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    // showDialog() {
    //   this.dialogVisible = true;
    // },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      // selectedSort: state => state.post.selectedSort,
      // searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      // sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<!--<style scoped>-->
<!--</style>-->
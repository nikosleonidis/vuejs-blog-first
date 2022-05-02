<template>
 <div class="container-fluid" v-if="posts.length > 0">
    <transition-group name="post-list">
      <post-item class="col-sm-9"
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else>Список постов пуст</h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostListComponent",
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<!--<style scoped>-->
<!--</style>-->
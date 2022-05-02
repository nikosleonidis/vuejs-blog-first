<template>
  <div class="card" @click="showPostItemDialog">
  <img class="card-img-top" src="" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{post.title}}</h5>
    <p class="card-text">{{post.text}}</p>
    <div class="text-info" @click.stop>
      <div class="this-page">
        <p class="text">{{ post.id }}</p>
      </div>
      <div class="btn-group">
        <button-u-i class="btn btn-warning">
           Редактировать
        </button-u-i>
        <button-u-i class="btn btn-danger" @click="$emit('remove', post)">
           Удалить
        </button-u-i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ButtonUI from "@/components/UI/Button";
export default {
  name: 'PostItemComponent',
  components: {ButtonUI},
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<!--<style scoped>-->
<!--</style>-->
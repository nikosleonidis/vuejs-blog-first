<template>
  <div class="modal modal-content" tabindex="-1" role="dialog" v-if="show">
  <div @click.stop class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
         <form @submit.prevent>
           <div class="form-group">
              <h4>Создание поста</h4>
              <input-u-i class="form-control"
                v-focus
                v-model="post.title"
                maxlength=100
                type="text"
                placeholder="Заголовок"
              />
<!--              <input-u-i class="form-control"-->
<!--                v-model="post.text"-->
<!--              />-->
            <div class="form-group">
              <label for="text">Текст</label>
              <textarea v-model="post.text" type="text"
                        maxlength=500
                        class="form-control" id="text"
                        rows="3" />
           </div>
  </div>
  </form>
      </div>
      <div class="modal-footer">
        <button-u-i class="btn btn-success" @click="createPost">Разместить</button-u-i>
        <button-u-i class="btn btn-danger" data-dismiss="modal" @click.prevent="alert"
                    @click.stop="hideDialog">
          Отмена
        </button-u-i>
      </div>
    </div>
  </div>
</div>
<!--     <ModalConfirm v-show="showModalConfirm" />-->
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";
import ButtonUI from "@/components/UI/Button";
import InputUI from "@/components/UI/Input";
export default {
  name: "modal-u-i",
  components: {ButtonUI, InputUI},
  mixins: [toggleMixin],
  // mounted() {console.log('modal mounted')},
  data() {
    return {
      post: {
        title: '',
        text: ''
      }
    }
  },
  methods: {
    alert: function (event) {
      // `this` inside methods points to the Vue instance
      // alert('Вы уверены что хотите отменить действие?'),
      this.hideDialog
      // `event` is the native DOM event
      if (event) {
        alert(event.displayModal)
        // alert(event.target.value)
      }
    },
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        text: ''
      }
    }
  }
}
</script>

<!--<style scoped>-->
<!--</style>-->
import {createStore} from "vuex"
import {postModule} from "@/store/postModule"

export default createStore({
    store: {
        isAuth: false,
    },
    modules: {
        post: postModule
    }
})
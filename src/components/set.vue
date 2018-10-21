<template>
    <main class='set-detail'>
    <div class='set-detail__name'>
        {{ data.setName }} Armor Set
        <button class='c_button' @click='close_w'> Close </button>
    </div>
        <div v-for='piece in data.pieces'
        :key='piece.name'
        @click="show('piece', piece)"
        class='set-detail__rep'>
            <img class='set-detail__img' :src="piece.imgsrc" :alt="piece.name">
        </div>
    </main>
</template>


<script>
import { bus } from "../main";

export default {
  props: ["data"],
  data() {
    return {
      nothing: ""
    };
  },
  methods: {
    show(name, load) {
      let payload = [name, load];
      bus.$emit("showArmor", payload);
    },

    close_w(){
      bus.$emit('close_set')
    }
  }
};
</script>
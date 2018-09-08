<template>
    <main class='set-detail'>
    <div class='set-detail__name'>
        {{ data.setName }} Armor Set
    </div>
        <div v-for='piece in data.pieces'
        :key='piece.name'
        class='set-detail__rep'>
            <img class='set-detail__img' :src="piece.imgsrc" :alt="piece.name">
        </div>
    </main>
</template>


<script>
export default {
  props: ["data"],
  data() {
    return {
      nothing: ""
    };
  }
};
</script>
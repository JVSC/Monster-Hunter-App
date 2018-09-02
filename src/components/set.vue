<template>
    <main class='set-detail'>
    <div>
        {{ data.setName }} Armor Set
        {{ data.rank }} Rank
        {{ data.rarity }}
    </div>
        <div v-for='piece in data.pieces'
        :key='piece.name'>
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
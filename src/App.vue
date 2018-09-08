<template>
<main class="container">

  <component 
    v-click-outside="onClickOutside"
    :is='component.data[0]' 
    :data='component.data[1]' 
    v-if='component.visibility'>
  </component>
  
  <div v-if='loaded'>
    <filter-holder></filter-holder>
    <gear-holder :data='data.armorsets'></gear-holder>
    <skill-holder :skills='data.skills'></skill-holder>
  </div>

</main>
</template>

<script>
import vClickOutside from 'v-click-outside'
import filterHolder from "./components/filter-holder.vue";
import gearHolder from "./components/gear-holder.vue";
import skillHolder from "./components/skill-holder.vue";
import set from "./components/set.vue";
import piece from "./components/piece.vue";
import { bus } from "./main";

export default {
  components: {
    "filter-holder": filterHolder,
    "gear-holder": gearHolder,
    "skill-holder": skillHolder,
    piece: piece,
    set: set
  },

  data() {
    return {
      message: "Hello",
      component: {
        data: "",
        visibility: false
      },
      data: {
        armorsets: "",
        decorations: "",
        charms: "",
        skills: ""
      },
      loaded: false,
      counter: 0
    };
  },
  methods:{
    onClickOutside(){
      this.component.visibility = false;
    }
  },
  watch: {
    counter() {
      if (this.counter > 3) this.loaded = true;
    }
  },
  mounted() {
    bus.$on("showArmor", payload => {
      console.log(payload);
      this.component.data = payload;
      this.component.visibility = true;
    });
  },
  created() {
    const self = this;
    const uri1 = "https://monhun-api.herokuapp.com/armorset";
    const uri2 = "https://mhw-db.com/";
    const bases = ["decorations", "charms", "skills"];

    self.$http.get(uri1).then(response => {
      self.data.armorsets = response.body;
      self.counter++;
    });

    bases.forEach(base => {
      self.$http.get(uri2 + base).then(response => {
        self.data[base] = response.body;
        self.counter++;
      });
    });
  },
  directives: {
    clickOutside: vClickOutside.directive
  }
};
</script>
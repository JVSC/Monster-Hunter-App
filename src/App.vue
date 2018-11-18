<template>
<main class="container">
  <section v-if='loaded'>
    <set 
      :data='component.data1' 
      v-if='component.visibility1'>
    </set>

    <piece 
      :data='component.data2' 
      v-if='component.visibility2'>
    </piece>
  
    <div>
      <filter-holder></filter-holder>
      <gear-holder :data='data.armorsets'></gear-holder>
      <skill-holder :skills='data.skills'></skill-holder>
      <builder></builder>
    </div>
    
  </section>
  <div v-else>
    <div  class='loading_screen'>{{ counter }}</div>
  </div>
</main>

</template>

<script>
import vClickOutside from "v-click-outside";
import filterHolder from "./components/filter-holder.vue";
import gearHolder from "./components/gear-holder.vue";
import skillHolder from "./components/skill-holder.vue";
import builder from "./components/builder/builder.vue";
import set from "./components/set.vue";
import piece from "./components/piece.vue";
import { bus } from "./main";

export default {
  components: {
    builder: builder,
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
        data1: "",
        data2: "",
        visibility1: false,
        visibility2: false
      },
      data: {
        armorsets: "",
        decorations: "",
        charms: "",
        skills: "",
        weapons: ""
      },
      loaded: false,
      counter: 0
    };
  },
  watch: {
    counter() {
      if (this.counter >= 5) this.loaded = true;
    }
  },

  mounted() {
    bus.$on("showArmor", payload => {
      if (payload[0] == "set") {
        this.component.data1 = payload[1];
        this.component.visibility1 = true;
      } else {
        this.component.data2 = payload[1];
        this.component.visibility2 = true;
      }
    });

    bus.$on("close_piece", () => {
      this.component.visibility2 = false;
    });

    bus.$on("close_set", () => {
      this.component.visibility1 = false;
    });
  },
  created() {
    const self = this;
    const uri1 = "https://monhun-api.herokuapp.com/armorset";
    const uri2 = "https://mhw-db.com/";
    const bases = ["decorations", "charms", "skills", "weapons"];

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
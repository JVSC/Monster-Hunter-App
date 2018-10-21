<template>
    <section class="holder holder--xl">
        <section class='build__section'>  
            <div v-for='piece in build' 
                :key='piece.type' 
                :class="'build__piece'">
                <div :class="'build__'+piece.type+ ' build__imgsize'"></div>{{ piece.name | greekfy }}
            </div>
        </section>
    </section>
</template>


<script>
import { bus } from "../../main";
import help from "./helper";

export default {
  data() {
    return {
      build: {
        head: "",
        chest: "",
        gloves: "",
        waist: "",
        legs: ""
      }
    };
  },
  watch: {
    "build.head"() {
      help.collect(this.build);
    },
    "build.chest"() {
      help.collect(this.build);
    },
    "build.waist"() {
      help.collect(this.build);
    },
    "build.gloves"() {
      help.collect(this.build);
    },
    "build.legs"() {
      help.collect(this.build);
    }
  },
  mounted() {
    bus.$on("set_gear", payload => {
      this.build[payload.type] = payload;
    });
  },

  filters: {
    greekfy: function(val) {
      if (val == undefined) return;
      if (val.includes("Alpha")) {
        return val.replace("Alpha", "α");
      } else if (val.includes("Beta")) {
        return val.replace("Beta", "β");
      } else {
        return val.replace("Gamma", "γ");
      }
    }
  }
};
</script>

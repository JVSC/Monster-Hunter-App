<template>
    <section class="holder holder--xl">
        <section class='build__section'>  
            <div class='build__pieces'>
              <div v-for='piece in build' 
                :key='piece.type' 
                :class="'build__piece'">
                <div :class="'build__'+piece.type+ ' build__imgsize'"></div>{{ piece.name | greekfy }}
              </div>
            </div>
            <div class="build__pieces build__pieces--narrow">
              <div class='build__piece build__piece--weapon'></div>
            </div>
        </section>
        {{ set.stats }}
    </section>
</template>


<script>
import { bus } from "../../main";
import help from "./helper";

export default {
  data() {
    return {
      build: {
        head: { type: "head", name: "none" },
        chest: { type: "chest", name: "none" },
        gloves: { type: "gloves", name: "none" },
        waist: { type: "waist", name: "none" },
        legs: { type: "legs", name: "none" }
      },
      set: {
        stats: "",
        skills: ""
      }
    };
  },
  watch: {
    "build.head"() {
      this.set.stats = help.collect(this.build);
    },
    "build.chest"() {
      this.set.stats = help.collect(this.build);
      help.collect_skills(this.build);  
    },
    "build.waist"() {
      this.set.stats = help.collect(this.build);
    },
    "build.gloves"() {
      this.set.stats = help.collect(this.build);
    },
    "build.legs"() {
      this.set.stats = help.collect(this.build);
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

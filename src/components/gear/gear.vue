<template>
	<section>
		<div 
			class='limbs'
			v-for='set in sets'
			v-if='!set._v' 
			:key='set.setName'>
			<div class ='limbs__title' @click="show('set', set)" >{{ set.setName | greekfy }}</div>
			<div 
				class='limbs__ai'
				v-for='piece in set.pieces'
				:class="{'active': piece.active}" 
				:key='piece.type'
				@click="show('piece', piece)">
				<img :src='imgs[piece.type]'/>
			</div>
		</div>
	</section>
</template>


<script>
import help from "./help";
import { bus } from "../../main";
export default {
  props: ["data"],
  data() {
    return {
      sets: this.data.slice(),
      imgs: {
        legs: require("../../assets/img/legs.png"),
        waist: require("../../assets/img/waist.png"),
        chest: require("../../assets/img/chest.png"),
        head: require("../../assets/img/head.png"),
        gloves: require("../../assets/img/gloves.png")
      }
    };
  },
  methods: {
    show(name, load) {
      let payload = [name, load]
      bus.$emit("showArmor", payload);
    }
  },
  mounted() {
    bus.$on("filtered", payload => {
      if (payload == "High" || payload == "Low")
        this.sets = help.rank(this.sets, this.data, payload, "rank");
      else if (payload == "Alpha" || payload == "Beta")
        this.sets = help.rank(this.sets, this.data, payload, "order");
      else if (payload == "Reset") {
        this.sets = this.data.slice();
        help.reset(this.sets, this.data);
      } else help.sorting(this.sets, payload);
    }),
      bus.$on("armor_filter", payload => {
        this.sets = this.data.slice();
        help.sort_by_skill(this.sets, payload);
        bus.$emit("reset_all");
      });
  },
  filters: {
    greekfy(val) {
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
<template>
	<section class='filter'>
		<button 
			v-for='filter in filters'
			class='filter__key'
			:class="{'filter__key--active': filter.status}"
			@click='selectGear(filter.name)'
			:key='filter.name'
		>
			{{filter.name}}
		</button>
	</section>
</template>


<script>
import { bus } from "../main";
export default {
  data() {
    return {
      filters: [
        { name: "High", status: false },
        { name: "Low", status: false },
        { name: "Alpha", status: false },
        { name: "Beta", status: false },
        { name: "Slots", status: false },
        { name: "Thunder", status: false },
        { name: "Fire", status: false },
        { name: "Ice", status: false },
        { name: "Water", status: false },
        { name: "Dragon", status: false },
        { name: "Reset", status: false }
      ]
    };
  },
  methods: {
    selectGear: function(val) {
      if (
        val === "High" ||
        val === "Low" ||
        val === "Alpha" ||
        val === "Beta"
      ) {
        for (var i = 0; i < this.filters.length; i++) {
          if (this.filters[i].name == val) this.filters[i].status = true;
          else this.filters[i].status = false;
        }
      } else if (val === "Reset") {
        for (i = 0; i < this.filters.length; i++)
          this.filters[i].status = false;
      } else {
        for (i = 4; i < this.filters.length; i++) {
          if (this.filters[i].name == val) this.filters[i].status = true;
          else this.filters[i].status = false;
        }
      }
      bus.$emit("filtered", val);
    }
  },
  mounted(){
    bus.$on('reset_all', ()=>{
      for (let i = 0; i < this.filters.length; i++)
        this.filters[i].status = false;
    })
  }
};
</script>
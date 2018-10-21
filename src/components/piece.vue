<template>
    <div class="piece-detail">
        <div class='piece-detail__img'>
            <img class='holder__sets holder__sets--img' :src="data.imgsrc" >
        </div>
        <div class="holder__sets holder__sets--name">{{ data.name | fix_name }}</div>

        <section  class='piece-detail__skillandRank'>
            <div v-for='skill in data.skills' :key='skill.skillName'>
                <div>
                    <section class='piece-detail__skillName'>{{ skill.skillName }}</section>
                    <img class="piece-detail__rank" v-for='ranked in skill.level' :key='ranked' :src='rank' alt="star rank">
                </div>
            </div>    
        </section>
        
        <section class='piece-detail__skillandRank' >
            Slots:
            <div class='piece-detail__slots'
                v-for='(slot, key) in data.slots' :key='key'>
                <span 
                    v-for='range in slot' :key='range'> 
                    <img class='piece-detail__simg' :src='deco[key]'> 
                </span>
            </div>
        </section>
        <div class='piece-detail__skillandRank'>
            <table>
                <th>Element</th>
                <th>Resistance</th>
                <tr v-for="(resistance, key) in data.resistances" :key='key'>
                    <td>vs {{key}}</td>
                    <td>{{resistance}}</td>
                </tr>
            </table>
        </div>
        
        <section class='piece-detail__opt'>
            <button 
                @click='add_g(data)'
                class='c_button'>
                
                Add
            </button>
            <button 
                @click="close_w" 
                class='c_button'>
                Close
            </button>
        </section>
    </div>
</template>


<script>
import { bus } from "../main";

export default {
  props: ["data"],
  data() {
    return {
      nothing: "",
      rank: require("../assets/img/rank.png"),
      deco: {
        gem_level_1: require("../assets/img/gem_level_1.png"),
        gem_level_2: require("../assets/img/gem_level_2.png"),
        gem_level_3: require("../assets/img/gem_level_3.png")
      }
    };
  },
  methods: {
      close_w(){
          bus.$emit('close_piece')
      },
      add_g(payload){
          bus.$emit('set_gear', payload);
      }
  },
  filters:{
      fix_name(val){
          return val.replace('Alpha', '').replace('Beta', '').replace('Gamma', '');
      }
  }
};
</script>
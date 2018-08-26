<template>
  <div v-if='loaded' class="container">
    <filter-holder></filter-holder>
    <gear-holder :data='data.armorsets'></gear-holder>
    <skill-holder :skills='data.skills'></skill-holder>
  </div>
</template>

<script>
  import filterHolder from './components/filter-holder.vue'
  import gearHolder from './components/gear-holder.vue'
  import skillHolder from './components/skill-holder.vue'

  export default {
    components:{
      'filter-holder': filterHolder,
      'gear-holder':gearHolder,
      'skill-holder': skillHolder
    },

    data(){
      return {
        message: "Hello",
        data:{
          armorsets:'',
          decorations:'',
          charms: '',
          skills: ''
        },
        loaded: false,
        counter: 0
      }
    },
    watch:{
      counter(){
        if (this.counter > 3)
          this.loaded = true
      }
    },
    created(){
      const self = this;
      const uri1 = 'https://monhun-api.herokuapp.com/armorset'
      const uri2 = 'https://mhw-db.com/'
      const bases = ['decorations', 'charms', 'skills']

      self
        .$http
        .get(uri1)
        .then( response => {
          self.data.armorsets = response.body
          self.counter++;
         })

      bases.forEach(base=>{
        self.$http.get(uri2+base)
          .then( response => {
            self.data[base] = response.body
            self.counter++;
          })
      }) 
    }
  }
</script>
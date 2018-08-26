<template>
	<section>
		<div 
			class='limbs'
			v-for='set in sets' 
			:key='set.setName'>
			
			<div class ='limbs__title'>{{ set.setName | greekfy }}</div>
			<div 
				class='limbs__ai'
				v-for='piece in set.pieces' 
				:key='piece.type'>
				<img :class='piece.type'/>
			</div>
		</div>
	</section>
</template>


<script>
	import help  from './help'
	import { bus } from '../../main'
	export default {
		props:['data'],
		data(){
			return{
				sets: this.data.slice()
			}
		},
		mounted(){
			bus.$on('filtered', payload =>{
				if (payload == 'High' || payload == 'Low')  this.sets = help.rank(this.sets, this.data, payload, 'rank');
				else if (payload == 'Alpha' || payload == 'Beta') this.sets = help.rank(this.sets, this.data, payload, 'order');
				else if (payload == 'Reset') this.sets = this.data.slice();
				else help.sorting(this.sets, payload); 
					
			})
		},
		filters:{
			greekfy(val){
				if (val.includes('Alpha')){
					return val.replace('Alpha','α')
				}
				else if ( val.includes('Beta')){
					return val.replace('Beta', 'β')
				}
				else{
					return val.replace('Gamma','γ')
				}	
			}
		}
	}
</script>
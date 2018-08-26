<template>

	<section class="holder">
		<div class="holder__name">Armor Sets</div>
		<div class="holder__class">
			<div class='holder__sets'>Sets</div>
			<div class='holder__sets'>Parts</div>
		</div>
		<div class="holder__limbs">
			<gear :data='data'></gear>
		</div>
	</section>

</template>
<script>
	import gear from './gear/gear.vue'

	export default {
		props:['data'],
		components:{
			'gear':gear
		}
	}
</script>
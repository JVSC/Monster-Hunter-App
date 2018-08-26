<template>
	<div class='superpower'>
		<section class="superpower__full"></section>
		<section class="superpower__list">
			<div
				class='superpower__code'
				v-for='skill in skills'
				:key='skill.name'>
				<div class="superpower__name">
					<img class="superpower__icon" :src='getSource(skill.name)'>
					{{skill.name}}
					<div class="superpower__detail">Read More...</div>
				</div>
				<div class='superpower__shortie'></div>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		props:['skills'],
		methods:{
			getSource: function(skill){
				const limits = ['Muck Resistance', 'Iron Skin', 'Dungmaster', 'Heat Guard', 'Ice Resistance', 'Blight Resistance', 'Dragon Attack', 'Normal Shots', "Piercing Shots", 'Spread/Power Shots', 'Free Elem/Ammo Up', 'Critical Boost', 'Power Prolonger', 'Partbreaker', 'Stamina Thief', 'Latent Power', 'Agitator', 'Peak Performance', 'Heroics', 'Fortify', 'Resentment', 'Special Ammo Boost', 'Leap of Faith', 'Evade Extender', 'Bombardier', 'Botanist', 'Geologist', 'Flinch Free', 'Scoutfly Range Up', 'Effluvia Resistance', 'Scenthound', 'Forager\'s Luck', 'Detector', 'Affinity Sliding', 'Poison Duration Up', 'Stamina Cap Up', 'Mind\'s Eye/Ballistics', 'Non-elemental Boost', 'Master\'s Touch', 'Nullify Wind Pressure', 'Razor Sharp/Spare Shot', 'Good Luck', 'Bow Charge Plus', 'Poison Functionality', 'Para Functionality', 'Sleep Functionality', 'Blast Functionality', 'Elderseal Boost']
				if (limits.includes(skill))
					return "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/placeholder-skill-mhw.png"

				return "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/"+ skill.toLowerCase().replace(" ", "-") +"-skill-mhw.png"
			}
		}
	}
</script>
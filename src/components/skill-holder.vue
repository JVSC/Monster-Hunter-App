<template>
	<div class='superpower'>
		<section class="superpower__full superpower__code superpower__code--bigger">
			<section>
				<div class='superpower__name superpower__name--main'>{{ focus.name }}</div>
				<div class='superpower__detail superpower__detail--lesser'>{{ focus.description }}</div>
			</section>
	
			<section class='superpower__code superpower__code--list'>
				<div v-for="rank in focus.ranks" :key="rank.level">
					<div class="superpower__name superpower__name--whitesmoke">
						Level {{ rank.level }} : <span class="superpower__detail superpower__detail--lesser">{{ rank.description }}</span>
					</div>
				</div>
			</section>
			<button class='filter__key filter__key--large'>
				Filter
			</button>
		</section>
	
		<div class='superpower__search'>
			<input v-model="filter" class='superpower__input' type="text" placeholder="Search...">
		</div>
	
		<section class="superpower__list">
			<div class='superpower__code' v-for='skill in skills' v-if="!skill.active" :key='skill.name'>
				<div class="superpower__name">
					<img class="superpower__icon" :src='getSource(skill.name)'> {{skill.name}}
					<div class="superpower__detail" @click="readMore(skill)">
						Read More... 
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		props: ['skills'],
		data() {
			return {
				focus: this.skills[0],
				filter: ''
			}
		},
		methods: {
			getSource: function(skill) {
				const limits = ['Muck Resistance', 'Iron Skin', 'Dungmaster', 'Heat Guard', 'Ice Resistance', 'Blight Resistance', 'Dragon Attack', 'Normal Shots', "Piercing Shots", 'Spread/Power Shots', 'Free Elem/Ammo Up', 'Critical Boost', 'Power Prolonger', 'Partbreaker', 'Stamina Thief', 'Latent Power', 'Agitator', 'Peak Performance', 'Heroics', 'Fortify', 'Resentment', 'Special Ammo Boost', 'Leap of Faith', 'Evade Extender', 'Bombardier', 'Botanist', 'Geologist', 'Flinch Free', 'Scoutfly Range Up', 'Effluvia Resistance', 'Scenthound', 'Forager\'s Luck', 'Detector', 'Affinity Sliding', 'Poison Duration Up', 'Stamina Cap Up', 'Mind\'s Eye/Ballistics', 'Non-elemental Boost', 'Master\'s Touch', 'Nullify Wind Pressure', 'Razor Sharp/Spare Shot', 'Good Luck', 'Bow Charge Plus', 'Poison Functionality', 'Para Functionality', 'Sleep Functionality', 'Blast Functionality', 'Elderseal Boost']
				if (limits.includes(skill))
					return "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/placeholder-skill-mhw.png"
	
				return "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/" + skill.toLowerCase().replace(" ", "-") + "-skill-mhw.png"
			},
			readMore(skill) {
				this.focus = skill
			}
		},
		watch: {
			filter() {
				var that = this;
				this.skills.forEach(skill => {
					if (skill.name.includes(that.filter))
						skill.active = false;
					else
						skill.active = true;
				})
			}
		}
	}
</script>
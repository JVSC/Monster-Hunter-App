<template>
    <div class="piece-detail">
        <div class='piece-detail__img'>
            <img class='holder__sets holder__sets--img' :src="data.imgsrc" >
        </div>
        {{ data }}
        {{ data.defense }}
        <div v-for='(slot, key) in data.slots' :key='key'>
            <span v-for='range in slot' :key='range'> <img :src='deco[key]'> </span>
        </div>
        <div v-for='skill in data.skills' :key='skill.skillName'>
            {{ skill.skillName }}
            {{ skill.level }}
        </div>
        <div>
            <table>
                <th>Element</th>
                <th>Resistance</th>
                <tr v-for="(resistance, key) in data.resistances" :key='key'>
                    <td>vs {{key}}</td>
                    <td>{{resistance}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script>
    export default {
        props:['data'],
        data(){
            return{
                nothing:'',
                deco:{
                    gem_level_1: require('../assets/img/gem_level_1.png'),
                    gem_level_2: require('../assets/img/gem_level_2.png'),
                    gem_level_3: require('../assets/img/gem_level_3.png')
                }
            }
        }
    }
</script>
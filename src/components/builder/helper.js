let help = {};

help.collect = build => {
    let total = { 
        defense: 0,
        fire: 0,
        water: 0,
        thunder: 0,
        ice: 0,
        dragon: 0,
    };
    
    for ( let piece in build ){
        if ( build[piece] ){
            total.defense += Number(build[piece].defense);
            let currentGear = build[piece].resistances;
            
            
            for ( let resistance in currentGear){
                total[resistance] += Number(currentGear[resistance])
            }
        }
    }
    return total
}

help.skills = build =>{
    var counts = {};
    for ( let piece in build ){
        if ( build[piece].skills ){
            build[piece].skills.forEach(skill => {
                if(counts[skill.skillName]){
                    counts[skill.skillName].level += skill.level;
                } else {
                    counts[skill.skillName] = {
                        name: skill.skillName,
                        level: skill.level
                    }
                }
            })
        }
    }
    return counts;
}

help.slots = build =>{
    let slots = {
        gem_level_1:0,
        gem_level_2:0,
        gem_level_3:0,
    };

    for ( let piece in build){
        if (build[piece].slots){
            for(let slot in build[piece].slots){
                slots[slot] += build[piece].slots[slot];
            }
        }
    }
    return slots;
}

export default help;
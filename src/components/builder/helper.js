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
    console.log(counts);
    return counts;
}

export default help;
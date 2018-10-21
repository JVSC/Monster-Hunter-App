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
                console.log(currentGear[resistance])
                total[resistance] += Number(currentGear[resistance])
            }        
        }
    }
    console.log(total);
}

export default help;
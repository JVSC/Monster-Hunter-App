let help = {};

help.rank = function(array, original, payload, attr){
	let copy = [];
	array = original.slice()
	array.forEach(piece=>{
		if (piece[attr] === payload)
			copy.push(piece)
	})
	return copy
} 	

help.sorting = function(array, attr){
	array.sort(function(a, b){
		return b[attr] - a[attr];
	});
}

export default help
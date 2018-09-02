let help = {};

help.rank = function (array, original, payload, attr) {
	let copy = [];
	array = original.slice()
	array.forEach(piece => {
		if (piece[attr] === payload)
			copy.push(piece)
	})
	return copy
}

help.reset = function (copy, original){
	copy = original;
	copy.forEach(armor => {
		armor._v = false;
		armor.pieces.forEach(piece => {
			piece.active = false;
		})
	})
}

help.sorting = function (array, attr) {
	array.sort(function (a, b) {
		return b[attr] - a[attr];
	});
}

help.sort_by_skill = function (array, payload) {
	array.forEach(armor => {
		armor._v = true;
		armor.pieces.forEach(piece => {
			piece.skills.forEach(skill => {
				if (skill.skillName == payload) {
					piece.active = true;
					armor._v = false;
				}
			})
		})
	})
}

export default help
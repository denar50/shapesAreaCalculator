export const promesifier = (theFunction, thisValue = null) => {
	return function() {
		const args = Array.prototype.slice.call(arguments);
		return new Promise((resolve, reject) => {
			args.push(resolve, reject)
			theFunction.apply(thisValue, args)
		})
	}
}

export const getAverageNumber = (numbersArray) => {
	const { length } = numbersArray
	if(length <= 0) return 0
	return numbersArray.reduce((sum, currentNumber) => sum + currentNumber, 0) / length
}

export const truncateNumber = (number, decimals = 1) => {
	const regexp = new RegExp(`^\\d+(?:\\.\\d{0,${decimals}})?`)
	return Number(number.toString().match(regexp))
}

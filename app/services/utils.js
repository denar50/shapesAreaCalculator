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
	return numbersArray.reduce((sum, currentNumber) => sum + currentNumber, 0)
}

import { promesifier, getAverageNumber } from 'services/utils'
import api from 'services/api'

const { getDimension } = api

export default class Shape {
	constructor() {
		this.calculatedAreas = []

		this.calculateNewRandomArea = promesifier(this.calculateNewRandomArea, this)
	}

	getStatistics() {
		const { calculatedAreas, calculatedAreas: { length, [length - 1]: lastCalculatedArea = 0 } } = this
		return {
			averageArea: getAverageNumber(calculatedAreas),
			areasCount: length,
			lastCalculatedArea
		}
	}

	calculateNewRandomArea(resolve, reject) {
		if(!this.dimensions || !this.calculateArea) return
		api.getDimensions(this.dimensions).then((dimensions) => {
			const newArea = this.calculateArea(dimensions)
			this.calculatedAreas.push(newArea)
			resolve(newArea)
		})
	}
}

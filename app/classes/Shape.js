import { promesifier, getAverageNumber } from 'services/utils'
import api from 'services/api'

const { getDimension } = api

export default class Shape {
	constructor() {
		this.calculatedAreas = []
	}

	getStatistics() {
		const { calculatedAreas, calculatedAreas: { length, [length - 1]: lastCalculatedArea = 0 } } = this
		return {
			averageArea: getAverageNumber(calculatedAreas),
			areasCount: length,
			lastCalculatedArea
		}
	}
}

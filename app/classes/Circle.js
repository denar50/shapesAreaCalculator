import Shape from 'classes/Shape'
import api from 'services/api'
import { promesifier } from 'services/utils'

export default class Circle extends Shape {
	constructor() {
		super()
		this.calculateNewRandomArea = promesifier(this.calculateNewRandomArea)
	}

	calculateNewRandomArea(resolve, reject) {
		api.getDimension().then((radius) => {
			const newArea = Math.PI * Math.pow(radius, 2)
			this.calculatedAreas.push(newArea)
			resolve(newArea)
		})
	}
}
